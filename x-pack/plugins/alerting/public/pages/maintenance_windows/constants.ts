/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import { invert, mapValues } from 'lodash';
import moment from 'moment';
import * as i18n from './translations';

export enum Frequency {
  YEARLY = '0',
  MONTHLY = '1',
  WEEKLY = '2',
  DAILY = '3',
}

export const DEFAULT_FREQUENCY_OPTIONS = [
  {
    text: i18n.CREATE_FORM_FREQUENCY_DAILY,
    value: Frequency.DAILY,
  },
  {
    text: i18n.CREATE_FORM_FREQUENCY_WEEKLY,
    value: Frequency.WEEKLY,
  },
  {
    text: i18n.CREATE_FORM_FREQUENCY_MONTHLY,
    value: Frequency.MONTHLY,
  },
  {
    text: i18n.CREATE_FORM_FREQUENCY_YEARLY,
    value: Frequency.YEARLY,
  },
  {
    text: i18n.CREATE_FORM_FREQUENCY_CUSTOM,
    value: 'CUSTOM',
  },
];

export const DEFAULT_PRESETS = {
  [Frequency.DAILY]: {
    interval: 1,
  },
  [Frequency.WEEKLY]: {
    interval: 1,
  },
  [Frequency.MONTHLY]: {
    interval: 1,
  },
  [Frequency.YEARLY]: {
    interval: 1,
  },
};

export enum EndsOptions {
  NEVER = 'never',
  ON_DATE = 'ondate',
  AFTER_X = 'afterx',
}

export const RECURRENCE_END_OPTIONS = [
  { id: 'never', label: i18n.CREATE_FORM_ENDS_NEVER },
  { id: 'ondate', label: i18n.CREATE_FORM_ENDS_ON_DATE },
  { id: 'afterx', label: i18n.CREATE_FORM_ENDS_AFTER_X },
];

export const CREATE_FORM_CUSTOM_FREQUENCY = (interval: number = 1) => [
  {
    text: i18n.CREATE_FORM_CUSTOM_FREQUENCY_DAILY(interval),
    value: Frequency.DAILY,
  },
  {
    text: i18n.CREATE_FORM_CUSTOM_FREQUENCY_WEEKLY(interval),
    value: Frequency.WEEKLY,
  },
  {
    text: i18n.CREATE_FORM_CUSTOM_FREQUENCY_MONTHLY(interval),
    value: Frequency.MONTHLY,
  },
  {
    text: i18n.CREATE_FORM_CUSTOM_FREQUENCY_YEARLY(interval),
    value: Frequency.YEARLY,
  },
];

export const ISO_WEEKDAYS = [1, 2, 3, 4, 5, 6, 7];

export const WEEKDAY_OPTIONS = ISO_WEEKDAYS.map((n) => ({
  id: String(n),
  label: moment().isoWeekday(n).format('ddd'),
}));

export const ISO_WEEKDAYS_TO_RRULE: Record<number, string> = {
  1: 'MO',
  2: 'TU',
  3: 'WE',
  4: 'TH',
  5: 'FR',
  6: 'SA',
  7: 'SU',
};

export const RRULE_WEEKDAYS_TO_ISO_WEEKDAYS = mapValues(invert(ISO_WEEKDAYS_TO_RRULE), (v) =>
  Number(v)
);

export enum Status {
  RUNNING = 'running',
  UPCOMING = 'upcoming',
  FINISHED = 'finished',
  ARCHIVED = 'archived',
}

export const STATUS_DISPLAY: Record<string, { color: string; label: string }> = {
  [Status.RUNNING]: { color: 'warning', label: i18n.TABLE_STATUS_RUNNING },
  [Status.UPCOMING]: { color: 'warning', label: i18n.TABLE_STATUS_UPCOMING },
  [Status.FINISHED]: { color: 'success', label: i18n.TABLE_STATUS_FINISHED },
  [Status.ARCHIVED]: { color: 'text', label: i18n.TABLE_STATUS_ARCHIVED },
};

export type StatusColor = 'warning' | 'success' | 'text';

export const STATUS_SORT = {
  [Status.RUNNING]: 0,
  [Status.UPCOMING]: 1,
  [Status.FINISHED]: 2,
  [Status.ARCHIVED]: 3,
};

export const STATUS_OPTIONS = [
  { value: Status.RUNNING, name: i18n.TABLE_STATUS_RUNNING },
  { value: Status.UPCOMING, name: i18n.TABLE_STATUS_UPCOMING },
  { value: Status.FINISHED, name: i18n.TABLE_STATUS_FINISHED },
  { value: Status.ARCHIVED, name: i18n.TABLE_STATUS_ARCHIVED },
];
