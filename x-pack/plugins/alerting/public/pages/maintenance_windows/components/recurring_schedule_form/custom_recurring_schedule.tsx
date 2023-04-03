/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import React, { useMemo } from 'react';
import moment from 'moment';
import { getUseField, useFormData } from '@kbn/es-ui-shared-plugin/static/forms/hook_form_lib';
import { Field } from '@kbn/es-ui-shared-plugin/static/forms/components';
import { EuiFlexGroup, EuiFlexItem, EuiSpacer } from '@elastic/eui';
import { CREATE_FORM_CUSTOM_FREQUENCY, Frequency, WEEKDAY_OPTIONS } from '../../constants';
import * as i18n from '../../translations';
import { ButtonGroupField } from '../fields/button_group_field';
import { getInitialByWeekday } from '../../helpers/get_initial_by_weekday';
import { getWeekdayInfo } from '../../helpers/get_weekday_info';
import './recurring_schedule.scss';

const UseField = getUseField({ component: Field });

export const CustomRecurringSchedule: React.FC = React.memo(() => {
  const [{ startDate, recurringSchedule }] = useFormData({
    watch: [
      'startDate',
      'recurringSchedule.frequency',
      'recurringSchedule.interval',
      'recurringSchedule.customFrequency',
    ],
  });

  const frequencyOptions = useMemo(
    () => CREATE_FORM_CUSTOM_FREQUENCY(recurringSchedule?.interval),
    [recurringSchedule?.interval]
  );

  const bymonthOptions = useMemo(() => {
    if (!startDate) return [];
    const date = moment(startDate);
    const { dayOfWeek, nthWeekdayOfMonth, isLastOfMonth } = getWeekdayInfo(date, 'ddd');
    return [
      {
        id: 'day',
        label: i18n.CREATE_FORM_CUSTOM_REPEAT_MONTHLY_ON_DAY(date),
      },
      {
        id: 'weekday',
        label: i18n.CREATE_FORM_WEEKDAY_SHORT(dayOfWeek!)[isLastOfMonth ? 0 : nthWeekdayOfMonth!],
      },
    ];
  }, [startDate]);

  const defaultByWeekday = useMemo(() => getInitialByWeekday([], moment(startDate)), [startDate]);

  return (
    <>
      {recurringSchedule?.frequency !== Frequency.DAILY ? (
        <>
          <EuiSpacer size="s" />
          <EuiFlexGroup gutterSize="s" alignItems="flexStart">
            <EuiFlexItem>
              <UseField
                path="recurringSchedule.interval"
                className="recurringScheduleFlexField"
                componentProps={{
                  'data-test-subj': 'interval-field',
                  euiFieldProps: {
                    type: 'number',
                    min: 1,
                    prepend: i18n.CREATE_FORM_INTERVAL_EVERY,
                  },
                }}
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <UseField
                path="recurringSchedule.customFrequency"
                componentProps={{
                  'data-test-subj': 'custom-frequency-field',
                  euiFieldProps: {
                    options: frequencyOptions,
                  },
                }}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size="s" />
        </>
      ) : null}
      {recurringSchedule?.customFrequency === Frequency.WEEKLY ||
      recurringSchedule?.frequency === Frequency.DAILY ? (
        <UseField
          path="recurringSchedule.byweekday"
          config={{ label: ' ', validations: [], defaultValue: defaultByWeekday }}
          component={ButtonGroupField}
          componentProps={{
            'data-test-subj': 'byweekday-field',
            legend: 'Repeat on weekday',
            options: WEEKDAY_OPTIONS,
            type: 'multi',
          }}
        />
      ) : null}

      {recurringSchedule?.customFrequency === Frequency.MONTHLY ? (
        <UseField
          path="recurringSchedule.bymonth"
          config={{ label: ' ', validations: [], defaultValue: 'day' }}
          component={ButtonGroupField}
          componentProps={{
            'data-test-subj': 'bymonth-field',
            legend: 'Repeat on weekday or month day',
            options: bymonthOptions,
          }}
        />
      ) : null}
    </>
  );
});
CustomRecurringSchedule.displayName = 'CustomRecurringSchedule';
