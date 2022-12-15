/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { loggingSystemMock } from '@kbn/core-logging-server-mocks';
import { Alert, createAlertFactory } from '../alert';
import { trimRecoveredAlerts } from './trim_recovered_alerts';

describe('trimRecoveredAlerts', () => {
  const logger = loggingSystemMock.createLogger();

  const alert1 = new Alert('1', { meta: { flappingHistory: [true, true, true, true] } });
  const alert2 = new Alert('2', { meta: { flappingHistory: new Array(20).fill(false) } });
  const alert3 = new Alert('3', { meta: { flappingHistory: [true, true] } });

  test('should remove longest recovered alerts', () => {
    const alertFactory = createAlertFactory({
      alerts: {},
      logger,
      maxAlerts: 2,
    });
    const recoveredAlerts = {
      '1': alert1,
      '2': alert2,
      '3': alert3,
    };
    const recoveredAlertsCurrent = {
      '1': alert1,
      '2': alert2,
    };

    const trimmedAlerts = trimRecoveredAlerts(
      recoveredAlerts,
      recoveredAlertsCurrent,
      alertFactory
    );
    expect(trimmedAlerts).toEqual({
      trimmedAlertsRecovered: { 1: alert1, 3: alert3 },
      trimmedAlertsRecoveredCurrent: { 1: alert1 },
    });
  });

  test('should not remove alerts if the num of recovered alerts is not at the limit', () => {
    const alertFactory = createAlertFactory({
      alerts: {},
      logger,
      maxAlerts: 3,
    });
    const recoveredAlerts = {
      '1': alert1,
      '2': alert2,
      '3': alert3,
    };
    const recoveredAlertsCurrent = {
      '1': alert1,
      '2': alert2,
    };

    const trimmedAlerts = trimRecoveredAlerts(
      recoveredAlerts,
      recoveredAlertsCurrent,
      alertFactory
    );
    expect(trimmedAlerts).toEqual({
      trimmedAlertsRecovered: recoveredAlerts,
      trimmedAlertsRecoveredCurrent: recoveredAlertsCurrent,
    });
  });
});
