/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { suspendedComponentWithProps } from '../../../lib/suspended_component_with_props';
import ConnectorEventLogListTableWithApi from './actions_connectors_log_list_table';

const GLOBAL_EVENT_LOG_LIST_STORAGE_KEY =
  'xpack.triggersActionsUI.globalEventLogList.initialColumns';

export const LogsList = () => {
  return suspendedComponentWithProps(
    ConnectorEventLogListTableWithApi,
    'xl'
  )({
    ruleId: '*',
    refreshToken: 0,
    initialPageSize: 50,
    hasRuleNames: true,
    hasAllSpaceSwitch: true,
    localStorageKey: GLOBAL_EVENT_LOG_LIST_STORAGE_KEY,
  });
};

// eslint-disable-next-line import/no-default-export
export default LogsList;
