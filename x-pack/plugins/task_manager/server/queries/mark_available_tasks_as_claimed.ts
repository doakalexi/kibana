/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import type * as estypes from '@elastic/elasticsearch/lib/api/typesWithBodyKey';
import { TaskTypeDictionary } from '../task_type_dictionary';
import { TaskStatus, TaskPriority } from '../task';
import {
  ScriptBasedSortClause,
  ScriptClause,
  mustBeAllOf,
  MustCondition,
  MustNotCondition,
} from './query_clauses';

export function taskWithLessThanMaxAttempts(type: string, maxAttempts: number): MustCondition {
  return {
    bool: {
      must: [
        { term: { 'task.taskType': type } },
        {
          range: {
            'task.attempts': {
              lt: maxAttempts,
            },
          },
        },
      ],
    },
  };
}

export function tasksOfType(taskTypes: string[]): estypes.QueryDslQueryContainer {
  return {
    bool: {
      should: [...taskTypes].map((type) => ({ term: { 'task.taskType': type } })),
    },
  };
}

export function tasksClaimedByOwner(
  taskManagerId: string,
  ...taskFilters: estypes.QueryDslQueryContainer[]
) {
  return mustBeAllOf(
    {
      term: {
        'task.ownerId': taskManagerId,
      },
    },
    { term: { 'task.status': 'claiming' } },
    ...taskFilters
  );
}

export const IdleTaskWithExpiredRunAt: MustCondition = {
  bool: {
    must: [{ term: { 'task.status': 'idle' } }, { range: { 'task.runAt': { lte: 'now' } } }],
  },
};

export const InactiveTasks: MustNotCondition = {
  bool: {
    must_not: [
      {
        bool: {
          should: [{ term: { 'task.status': 'running' } }, { term: { 'task.status': 'claiming' } }],
          // needed since default value is 0 when there is a `must` in the `bool`
          minimum_should_match: 1,
          must: { range: { 'task.retryAt': { gt: 'now' } } },
        },
      },
    ],
  },
};

export const EnabledTask: MustCondition = {
  bool: {
    must: [
      {
        term: {
          'task.enabled': true,
        },
      },
    ],
  },
};

export const RecognizedTask: MustNotCondition = {
  bool: {
    must_not: [
      {
        term: {
          'task.status': TaskStatus.Unrecognized,
        },
      },
    ],
  },
};

export const RunningOrClaimingTaskWithExpiredRetryAt: MustCondition = {
  bool: {
    must: [
      {
        bool: {
          should: [{ term: { 'task.status': 'running' } }, { term: { 'task.status': 'claiming' } }],
        },
      },
      { range: { 'task.retryAt': { lte: 'now' } } },
    ],
  },
};

const SortByRunAtAndRetryAtScript: ScriptBasedSortClause = {
  _script: {
    type: 'number',
    order: 'asc',
    script: {
      lang: 'painless',
      source: `
if (doc['task.retryAt'].size()!=0) {
  return doc['task.retryAt'].value.toInstant().toEpochMilli();
}
if (doc['task.runAt'].size()!=0) {
  return doc['task.runAt'].value.toInstant().toEpochMilli();
}
    `,
    },
  },
};
export const SortByRunAtAndRetryAt = SortByRunAtAndRetryAtScript as estypes.SortCombinations;

function getSortByPriority(definitions: TaskTypeDictionary): estypes.SortCombinations | undefined {
  if (definitions.size() === 0) return;

  return {
    _script: {
      type: 'number',
      order: 'desc',
      script: {
        lang: 'painless',
        // Use priority if explicitly specified in task definition, otherwise default to 50 (Normal)
        // TODO: we could do this locally as well, but they may starve
        source: `
          String taskType = doc['task.taskType'].value;
          if (params.priority_map.containsKey(taskType)) {
            return params.priority_map[taskType];
          } else {
            return ${TaskPriority.Normal};
          }
        `,
        params: {
          priority_map: definitions
            .getAllDefinitions()
            .reduce<Record<string, TaskPriority>>((acc, taskDefinition) => {
              if (taskDefinition.priority) {
                acc[taskDefinition.type] = taskDefinition.priority;
              }
              return acc;
            }, {}),
        },
      },
    },
  };
}

export function getClaimSort(definitions: TaskTypeDictionary): estypes.SortCombinations[] {
  const sortByPriority = getSortByPriority(definitions);
  if (!sortByPriority) return [SortByRunAtAndRetryAt];
  return [sortByPriority, SortByRunAtAndRetryAt];
}

export interface UpdateFieldsAndMarkAsFailedOpts {
  fieldUpdates: {
    [field: string]: string | number | Date;
  };
  claimableTaskTypes: string[];
  skippedTaskTypes: string[];
  unusedTaskTypes: string[];
  taskMaxAttempts: { [field: string]: number };
}

export const updateFieldsAndMarkAsFailed = ({
  fieldUpdates,
  claimableTaskTypes,
  skippedTaskTypes,
  unusedTaskTypes,
  taskMaxAttempts,
}: UpdateFieldsAndMarkAsFailedOpts): ScriptClause => {
  const setScheduledAtScript = `if(ctx._source.task.retryAt != null && ZonedDateTime.parse(ctx._source.task.retryAt).toInstant().toEpochMilli() < params.now) {
    ctx._source.task.scheduledAt=ctx._source.task.retryAt;
  } else {
    ctx._source.task.scheduledAt=ctx._source.task.runAt;
  }`;
  const markAsClaimingScript = `ctx._source.task.status = "claiming"; ${Object.keys(fieldUpdates)
    .map((field) => `ctx._source.task.${field}=params.fieldUpdates.${field};`)
    .join(' ')}`;
  const setScheduledAtAndMarkAsClaimed = `${setScheduledAtScript}
    ${markAsClaimingScript}`;
  return {
    source: `
    if (params.claimableTaskTypes.contains(ctx._source.task.taskType)) {
      ${setScheduledAtAndMarkAsClaimed}
    } else if (params.unusedTaskTypes.contains(ctx._source.task.taskType)) {
      ctx._source.task.status = "unrecognized";
    } else {
      ctx.op = "noop";
    }`,
    lang: 'painless',
    params: {
      now: new Date().getTime(),
      fieldUpdates,
      claimableTaskTypes,
      skippedTaskTypes,
      unusedTaskTypes,
      taskMaxAttempts,
    },
  };
};

export const OneOfTaskTypes = (field: string, types: string[]): MustCondition => {
  return {
    bool: {
      must: [
        {
          terms: {
            [field]: types,
          },
        },
      ],
    },
  };
};

export function tasksWithPartitions(partitions: number[]): estypes.QueryDslQueryContainer {
  return {
    bool: {
      must: [
        {
          bool: {
            should: [
              {
                terms: {
                  'task.partition': partitions,
                },
              },
              {
                bool: {
                  must_not: [
                    {
                      exists: {
                        field: 'task.partition',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
}
