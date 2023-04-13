/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { httpServiceMock } from '@kbn/core/public/mocks';
import { MaintenanceWindowResponse } from '../../pages/maintenance_windows/types';
import { getMaintenanceWindowsList } from './list';

const http = httpServiceMock.createStartContract();

beforeEach(() => jest.resetAllMocks());

describe('getMaintenanceWindowsList', () => {
  test('should call list maintenance windows api', async () => {
    const apiResponse = [
      {
        id: '1',
        title: 'test',
        enabled: true,
        duration: 1,
        expiration_date: '2023-03-23T19:16:21.293Z',
        events: [],
        r_rule: {
          dtstart: '2023-03-23T19:16:21.293Z',
          tzid: 'America/New_York',
          freq: 3,
          interval: 1,
          byweekday: ['TH'],
        },
        status: 'upcoming',
        event_start_time: '2023-03-23T19:16:21.293Z',
        event_end_time: '2023-03-23T19:16:21.293Z',
        created_by: null,
        updated_by: null,
        created_at: '2023-03-23T19:16:21.293Z',
        updated_at: '2023-03-23T19:16:21.293Z',
        total: 1000,
      },
    ];
    http.get.mockResolvedValueOnce(apiResponse);

    const maintenanceWindow: MaintenanceWindowResponse[] = [
      {
        id: '1',
        title: 'test',
        enabled: true,
        duration: 1,
        expirationDate: '2023-03-23T19:16:21.293Z',
        events: [],
        rRule: {
          dtstart: '2023-03-23T19:16:21.293Z',
          tzid: 'America/New_York',
          freq: 3,
          interval: 1,
          byweekday: ['TH'],
        },
        status: 'upcoming',
        eventStartTime: '2023-03-23T19:16:21.293Z',
        eventEndTime: '2023-03-23T19:16:21.293Z',
        createdBy: null,
        updatedBy: null,
        createdAt: '2023-03-23T19:16:21.293Z',
        updatedAt: '2023-03-23T19:16:21.293Z',
        total: 1000,
      },
    ];

    const result = await getMaintenanceWindowsList({ http });
    expect(result).toEqual(maintenanceWindow);
    expect(http.get.mock.calls[0]).toMatchInlineSnapshot(`
      Array [
        "/internal/alerting/rules/maintenance_window/_find",
      ]
    `);
  });
});
