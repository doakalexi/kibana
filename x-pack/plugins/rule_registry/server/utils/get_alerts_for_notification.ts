/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { RuleNotifyWhen, RuleNotifyWhenType } from '@kbn/alerting-plugin/common';
import { RulesSettingsFlappingProperties } from '@kbn/alerting-plugin/common/rules_settings';
import {
  ALERT_END,
  ALERT_STATUS,
  ALERT_STATUS_ACTIVE,
  ALERT_STATUS_RECOVERED,
  EVENT_ACTION,
} from '@kbn/rule-data-utils';

export function getAlertsForNotification(
  flappingSettings: RulesSettingsFlappingProperties,
  trackedEventsToIndex: any[],
  notifyWhen?: RuleNotifyWhenType | null
) {
  const trackedEventsToNotify: any[] = [];
  trackedEventsToIndex.map((trackedEvent) => {
    if (!flappingSettings.enabled || trackedEvent.event[ALERT_STATUS] === ALERT_STATUS_ACTIVE) {
      trackedEvent.pendingRecoveredCount = 0;
      trackedEventsToNotify.push(trackedEvent);
    } else if (
      flappingSettings.enabled &&
      trackedEvent.event[ALERT_STATUS] === ALERT_STATUS_RECOVERED
    ) {
      if (trackedEvent.flapping) {
        const count = trackedEvent.pendingRecoveredCount || 0;
        trackedEvent.pendingRecoveredCount = count + 1;
        if (trackedEvent.pendingRecoveredCount < flappingSettings.statusChangeThreshold) {
          trackedEvent.event[ALERT_STATUS] = ALERT_STATUS_ACTIVE;
          trackedEvent.event[EVENT_ACTION] = 'active';
          delete trackedEvent.event[ALERT_END];

          // rules with "on status change" should return notifications
          if (notifyWhen === RuleNotifyWhen.CHANGE) {
            trackedEventsToNotify.push(trackedEvent);
          }
        } else {
          trackedEvent.pendingRecoveredCount = 0;
          trackedEventsToNotify.push(trackedEvent);
        }
      } else {
        trackedEventsToNotify.push(trackedEvent);
      }
    }
  });
  return trackedEventsToNotify;
}
