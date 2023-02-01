/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { takeLatest, debounce } from 'redux-saga/effects';
import { fetchEffectFactory } from '../utils/fetch_effect';
import {
  fetchMonitorOverviewAction,
  quietFetchOverviewAction,
  fetchOverviewStatusAction,
  quietFetchOverviewStatusAction,
} from './actions';
import { fetchMonitorOverview, fetchOverviewStatus } from './api';

export function* fetchMonitorOverviewEffect() {
  yield debounce(
    300, // Only take the latest while ignoring any intermediate triggers
    [fetchMonitorOverviewAction.get, quietFetchOverviewAction.get],
    fetchEffectFactory(
      fetchMonitorOverview,
      fetchMonitorOverviewAction.success,
      fetchMonitorOverviewAction.fail
    )
  );
}

export function* fetchOverviewStatusEffect() {
  yield takeLatest(
    [fetchOverviewStatusAction.get, quietFetchOverviewStatusAction.get],
    fetchEffectFactory(
      fetchOverviewStatus,
      fetchOverviewStatusAction.success,
      fetchOverviewStatusAction.fail
    ) as ReturnType<typeof fetchEffectFactory>
  );
}
