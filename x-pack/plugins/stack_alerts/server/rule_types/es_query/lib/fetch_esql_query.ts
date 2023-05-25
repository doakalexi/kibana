/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { entries } from 'lodash';
import { getIndexPatternFromESQLQuery } from '@kbn/es-query';
import { DataView, DataViewsContract, getTime } from '@kbn/data-plugin/common';
import { parseAggregationResults } from '@kbn/triggers-actions-ui-plugin/common';
import { SharePluginStart } from '@kbn/share-plugin/server';
import { IScopedClusterClient, Logger } from '@kbn/core/server';
import { OnlyEsqlQueryRuleParams } from '../types';

export type EsqlDocument = Record<string, string | null>;

export interface EsqlHit {
  _id: string;
  _index: string;
  _source: EsqlDocument;
}

export interface EsqlResultColumn {
  name: string;
  type: 'date' | 'keyword';
}

export type EsqlResultRow = Array<string | null>;

export interface EsqlTable {
  columns: EsqlResultColumn[];
  values: EsqlResultRow[];
}

export interface FetchEsqlQueryOpts {
  ruleId: string;
  alertLimit: number | undefined;
  params: OnlyEsqlQueryRuleParams;
  latestTimestamp: string | undefined;
  spacePrefix: string;
  services: {
    logger: Logger;
    scopedClusterClient: IScopedClusterClient;
    share: SharePluginStart;
    dataViews: DataViewsContract;
  };
}

export async function fetchEsqlQuery({
  ruleId,
  alertLimit,
  params,
  latestTimestamp,
  services,
}: FetchEsqlQueryOpts) {
  const { logger, scopedClusterClient, dataViews } = services;
  const esClient = scopedClusterClient.asCurrentUser;

  const indexPatternRefs = await dataViews.getIdsWithTitle();
  const indexPattern = getIndexPatternFromESQLQuery(params.esqlQuery.esql);
  const dataViewId = indexPatternRefs.find((r) => r.title === indexPattern)?.id ?? '';
  const dataView = await dataViews.get(dataViewId);

  const { query, dateStart, dateEnd } = getEsqlQuery(dataView, params, latestTimestamp, alertLimit);

  logger.debug(`ESQL query rule (${ruleId}) query: ${JSON.stringify(query)}`);

  const response = await esClient.transport.request<EsqlTable>({
    method: 'POST',
    path: '/_esql',
    body: {
      ...query,
    },
  });

  return {
    link: '', // TODO
    numMatches: Number(2),
    parsedResults: parseAggregationResults({
      isCountAgg: false,
      isGroupAgg: true,
      esResult: {
        took: 0,
        timed_out: false,
        _shards: { failed: 0, successful: 0, total: 0 },
        hits: { hits: [] },
        aggregations: toEsResult(response),
      },
      resultLimit: alertLimit,
    }),
    dateStart,
    dateEnd,
  };
}

export function getEsqlQuery(
  index: DataView,
  params: OnlyEsqlQueryRuleParams,
  latestTimestamp: string | undefined,
  alertLimit?: number
) {
  const timeFieldName = index.timeFieldName;

  if (!timeFieldName) {
    throw new Error('Invalid data view without timeFieldName.');
  }

  const timeRange = {
    from: `now-${params.timeWindowSize}${params.timeWindowUnit}`,
    to: 'now',
  };
  const timerangeFilter = getTime(index, timeRange);
  const dateStart = timerangeFilter?.query.range[timeFieldName].gte;
  const dateEnd = timerangeFilter?.query.range[timeFieldName].lte;
  const rangeFilter: unknown[] = [
    {
      range: {
        [timeFieldName]: {
          lte: dateEnd,
          gte: dateStart,
          format: 'strict_date_optional_time',
        },
      },
    },
  ];

  if (params.excludeHitsFromPreviousRun) {
    if (latestTimestamp && latestTimestamp > dateStart) {
      // add additional filter for documents with a timestamp greater then
      // the timestamp of the previous run, so that those documents are not counted twice
      rangeFilter.push({
        bool: {
          filter: [
            {
              bool: {
                must_not: [
                  {
                    bool: {
                      filter: [
                        {
                          range: {
                            [timeFieldName]: {
                              lte: latestTimestamp,
                              format: 'strict_date_optional_time',
                            },
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
      });
    }
  }

  const query = {
    query: `${params.esqlQuery.esql} | limit ${alertLimit}`,
    filter: {
      bool: {
        filter: rangeFilter,
      },
    },
  };
  return {
    query,
    dateStart,
    dateEnd,
  };
}

const rowToDocument = (columns: EsqlResultColumn[], row: EsqlResultRow): EsqlDocument => {
  return columns.reduce<Record<string, string | null>>((acc, column, i) => {
    acc[column.name] = row[i];

    return acc;
  }, {});
};

export const toEsResult = (results: EsqlTable) => {
  const byInstanceId: Record<string, EsqlHit[]> = {};
  results.values.forEach((row, i) => {
    const id = 'test';
    const document = rowToDocument(results.columns, row);
    const hit = {
      _id: id,
      _index: '',
      _source: {
        ...document,
      },
    };
    if (byInstanceId[id]) {
      byInstanceId[id].push(hit);
    } else {
      byInstanceId[id] = [hit];
    }
  });
  return {
    groupAgg: {
      buckets: entries(byInstanceId).map(([key, value]) => {
        return {
          key,
          doc_count: value.length,
          topHitsAgg: {
            hits: {
              hits: value ?? [],
            },
          },
        };
      }),
    },
  };
};
