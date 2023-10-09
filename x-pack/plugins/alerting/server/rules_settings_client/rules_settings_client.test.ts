/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import {
  RulesSettingsClient,
  RulesSettingsClientConstructorOptions,
} from './rules_settings_client';
import { RulesSettingsFlappingClient } from './flapping/rules_settings_flapping_client';
import { savedObjectsClientMock, loggingSystemMock } from '@kbn/core/server/mocks';
import { SavedObjectsErrorHelpers } from '@kbn/core/server';
import {
  RULES_SETTINGS_FEATURE_ID,
  RULES_SETTINGS_SAVED_OBJECT_TYPE,
  RULES_SETTINGS_SAVED_OBJECT_ID,
  DEFAULT_FLAPPING_SETTINGS,
  RulesSettings,
  DEFAULT_QUERY_DELAY_SETTINGS,
} from '../../common';

const mockDateString = '2019-02-12T21:01:22.479Z';

const savedObjectsClient = savedObjectsClientMock.create();

const rulesSettingsClientParams: jest.Mocked<RulesSettingsClientConstructorOptions> = {
  logger: loggingSystemMock.create().get(),
  getUserName: jest.fn(),
  savedObjectsClient,
  isServerless: false,
};

const getMockRulesSettings = (): RulesSettings => {
  return {
    flapping: {
      enabled: DEFAULT_FLAPPING_SETTINGS.enabled,
      lookBackWindow: DEFAULT_FLAPPING_SETTINGS.lookBackWindow,
      statusChangeThreshold: DEFAULT_FLAPPING_SETTINGS.statusChangeThreshold,
      createdBy: 'test name',
      updatedBy: 'test name',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    queryDelay: {
      delay: DEFAULT_QUERY_DELAY_SETTINGS.delay,
      createdBy: 'test name',
      updatedBy: 'test name',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  };
};

describe('RulesSettingsClient', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(mockDateString));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    jest.resetAllMocks();
    rulesSettingsClientParams.getUserName.mockResolvedValue('test name');
  });

  test('can initialize correctly', async () => {
    const client = new RulesSettingsClient(rulesSettingsClientParams);
    expect(client.flapping()).toEqual(expect.any(RulesSettingsFlappingClient));
  });

  test('can create a new rules settings saved object', async () => {
    const client = new RulesSettingsClient(rulesSettingsClientParams);
    const mockAttributes = getMockRulesSettings();

    savedObjectsClient.create.mockResolvedValueOnce({
      id: RULES_SETTINGS_FEATURE_ID,
      type: RULES_SETTINGS_SAVED_OBJECT_TYPE,
      attributes: mockAttributes,
      references: [],
    });

    const result = await client.create();

    expect(savedObjectsClient.create).toHaveBeenCalledTimes(1);
    expect(savedObjectsClient.create).toHaveBeenCalledWith(
      RULES_SETTINGS_SAVED_OBJECT_TYPE,
      {
        flapping: expect.objectContaining({
          enabled: mockAttributes.flapping.enabled,
          lookBackWindow: mockAttributes.flapping.lookBackWindow,
          statusChangeThreshold: mockAttributes.flapping.statusChangeThreshold,
          createdBy: 'test name',
          updatedBy: 'test name',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
        queryDelay: expect.objectContaining({
          delay: 0,
          createdBy: 'test name',
          updatedBy: 'test name',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
      },
      {
        id: RULES_SETTINGS_SAVED_OBJECT_ID,
        overwrite: true,
      }
    );
    expect(result.attributes).toEqual(mockAttributes);
  });

  test('can create a new rules settings saved object with default serverless query delay', async () => {
    const client = new RulesSettingsClient({ ...rulesSettingsClientParams, isServerless: true });
    const mockAttributes = getMockRulesSettings();

    savedObjectsClient.create.mockResolvedValueOnce({
      id: RULES_SETTINGS_FEATURE_ID,
      type: RULES_SETTINGS_SAVED_OBJECT_TYPE,
      attributes: mockAttributes,
      references: [],
    });

    const result = await client.create();

    expect(savedObjectsClient.create).toHaveBeenCalledTimes(1);
    expect(savedObjectsClient.create).toHaveBeenCalledWith(
      RULES_SETTINGS_SAVED_OBJECT_TYPE,
      {
        flapping: expect.objectContaining({
          enabled: mockAttributes.flapping.enabled,
          lookBackWindow: mockAttributes.flapping.lookBackWindow,
          statusChangeThreshold: mockAttributes.flapping.statusChangeThreshold,
          createdBy: 'test name',
          updatedBy: 'test name',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
        queryDelay: expect.objectContaining({
          delay: 15,
          createdBy: 'test name',
          updatedBy: 'test name',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
      },
      {
        id: RULES_SETTINGS_SAVED_OBJECT_ID,
        overwrite: true,
      }
    );
    expect(result.attributes).toEqual(mockAttributes);
  });

  test('can get existing rules settings saved object', async () => {
    const client = new RulesSettingsClient(rulesSettingsClientParams);
    const mockAttributes = getMockRulesSettings();

    savedObjectsClient.get.mockResolvedValueOnce({
      id: RULES_SETTINGS_FEATURE_ID,
      type: RULES_SETTINGS_SAVED_OBJECT_TYPE,
      attributes: mockAttributes,
      references: [],
    });
    const result = await client.get();
    expect(result.attributes).toEqual(mockAttributes);
  });

  test('throws if there is no existing saved object to get', async () => {
    const client = new RulesSettingsClient(rulesSettingsClientParams);

    savedObjectsClient.get.mockRejectedValueOnce(
      SavedObjectsErrorHelpers.createGenericNotFoundError(
        RULES_SETTINGS_SAVED_OBJECT_TYPE,
        RULES_SETTINGS_SAVED_OBJECT_ID
      )
    );
    await expect(client.get()).rejects.toThrowError();
  });

  test('can persist flapping settings when saved object does not exist', async () => {
    const client = new RulesSettingsClient(rulesSettingsClientParams);
    const mockAttributes = getMockRulesSettings();
    savedObjectsClient.get.mockRejectedValueOnce(
      SavedObjectsErrorHelpers.createGenericNotFoundError(
        RULES_SETTINGS_SAVED_OBJECT_TYPE,
        RULES_SETTINGS_SAVED_OBJECT_ID
      )
    );

    savedObjectsClient.create.mockResolvedValueOnce({
      id: RULES_SETTINGS_FEATURE_ID,
      type: RULES_SETTINGS_SAVED_OBJECT_TYPE,
      attributes: mockAttributes,
      references: [],
    });

    const result = await client.flapping().get();

    expect(savedObjectsClient.get).toHaveBeenCalledWith(
      RULES_SETTINGS_SAVED_OBJECT_TYPE,
      RULES_SETTINGS_SAVED_OBJECT_ID
    );

    expect(savedObjectsClient.create).toHaveBeenCalledWith(
      RULES_SETTINGS_SAVED_OBJECT_TYPE,
      {
        flapping: expect.objectContaining({
          enabled: mockAttributes.flapping.enabled,
          lookBackWindow: mockAttributes.flapping.lookBackWindow,
          statusChangeThreshold: mockAttributes.flapping.statusChangeThreshold,
          createdBy: 'test name',
          updatedBy: 'test name',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
        queryDelay: expect.objectContaining({
          delay: 0,
          createdBy: 'test name',
          updatedBy: 'test name',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
      },
      {
        id: RULES_SETTINGS_SAVED_OBJECT_ID,
        overwrite: true,
      }
    );
    expect(result).toEqual(mockAttributes.flapping);
  });

  test('can persist flapping settings when saved object already exists', async () => {
    const client = new RulesSettingsClient(rulesSettingsClientParams);
    const mockAttributes = getMockRulesSettings();

    savedObjectsClient.get.mockResolvedValueOnce({
      id: RULES_SETTINGS_FEATURE_ID,
      type: RULES_SETTINGS_SAVED_OBJECT_TYPE,
      attributes: mockAttributes,
      references: [],
    });

    const result = await client.flapping().get();

    expect(savedObjectsClient.get).toHaveBeenCalledWith(
      RULES_SETTINGS_SAVED_OBJECT_TYPE,
      RULES_SETTINGS_SAVED_OBJECT_ID
    );
    expect(savedObjectsClient.create).not.toHaveBeenCalled();
    expect(result).toEqual(mockAttributes.flapping);
  });

  test('can update flapping settings when saved object does not exist', async () => {
    const client = new RulesSettingsClient(rulesSettingsClientParams);
    const mockAttributes = getMockRulesSettings();

    savedObjectsClient.get.mockRejectedValueOnce(
      SavedObjectsErrorHelpers.createGenericNotFoundError(
        RULES_SETTINGS_SAVED_OBJECT_TYPE,
        RULES_SETTINGS_SAVED_OBJECT_ID
      )
    );

    const mockResolve = {
      id: RULES_SETTINGS_FEATURE_ID,
      type: RULES_SETTINGS_SAVED_OBJECT_TYPE,
      attributes: mockAttributes,
      references: [],
      version: '123',
    };

    savedObjectsClient.create.mockResolvedValueOnce(mockResolve);
    savedObjectsClient.update.mockResolvedValueOnce({
      ...mockResolve,
      attributes: {
        flapping: {
          ...mockResolve.attributes.flapping,
          enabled: false,
          lookBackWindow: 5,
          statusChangeThreshold: 5,
        },
      },
    });

    // Try to update with new values
    const result = await client.flapping().update({
      enabled: false,
      lookBackWindow: 5,
      statusChangeThreshold: 5,
    });

    // Tried to get first, but no results
    expect(savedObjectsClient.get).toHaveBeenCalledWith(
      RULES_SETTINGS_SAVED_OBJECT_TYPE,
      RULES_SETTINGS_SAVED_OBJECT_ID
    );

    // So create a new entry
    expect(savedObjectsClient.create).toHaveBeenCalledWith(
      RULES_SETTINGS_SAVED_OBJECT_TYPE,
      {
        flapping: expect.objectContaining({
          enabled: mockAttributes.flapping.enabled,
          lookBackWindow: mockAttributes.flapping.lookBackWindow,
          statusChangeThreshold: mockAttributes.flapping.statusChangeThreshold,
          createdBy: 'test name',
          updatedBy: 'test name',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
        queryDelay: expect.objectContaining({
          delay: 0,
          createdBy: 'test name',
          updatedBy: 'test name',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
      },
      {
        id: RULES_SETTINGS_SAVED_OBJECT_ID,
        overwrite: true,
      }
    );

    // Try to update with version
    expect(savedObjectsClient.update).toHaveBeenCalledWith(
      RULES_SETTINGS_SAVED_OBJECT_TYPE,
      RULES_SETTINGS_SAVED_OBJECT_ID,
      {
        flapping: expect.objectContaining({
          enabled: false,
          lookBackWindow: 5,
          statusChangeThreshold: 5,
          createdBy: 'test name',
          updatedBy: 'test name',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
        queryDelay: expect.objectContaining({
          delay: 0,
          createdBy: 'test name',
          updatedBy: 'test name',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
      },
      { version: '123' }
    );

    expect(result).toEqual(
      expect.objectContaining({
        enabled: false,
        lookBackWindow: 5,
        statusChangeThreshold: 5,
      })
    );
  });

  test('can persist query delay settings when saved object already exists', async () => {
    const client = new RulesSettingsClient(rulesSettingsClientParams);
    const mockAttributes = getMockRulesSettings();

    savedObjectsClient.get.mockResolvedValueOnce({
      id: RULES_SETTINGS_FEATURE_ID,
      type: RULES_SETTINGS_SAVED_OBJECT_TYPE,
      attributes: mockAttributes,
      references: [],
    });

    const result = await client.queryDelay().get();

    expect(savedObjectsClient.get).toHaveBeenCalledWith(
      RULES_SETTINGS_SAVED_OBJECT_TYPE,
      RULES_SETTINGS_SAVED_OBJECT_ID
    );
    expect(savedObjectsClient.create).not.toHaveBeenCalled();
    expect(result).toEqual(mockAttributes.queryDelay);
  });

  test('can update query delay settings when saved object does not exist', async () => {
    const client = new RulesSettingsClient(rulesSettingsClientParams);
    const mockAttributes = getMockRulesSettings();

    savedObjectsClient.get.mockRejectedValueOnce(
      SavedObjectsErrorHelpers.createGenericNotFoundError(
        RULES_SETTINGS_SAVED_OBJECT_TYPE,
        RULES_SETTINGS_SAVED_OBJECT_ID
      )
    );

    const mockResolve = {
      id: RULES_SETTINGS_FEATURE_ID,
      type: RULES_SETTINGS_SAVED_OBJECT_TYPE,
      attributes: mockAttributes,
      references: [],
      version: '123',
    };

    savedObjectsClient.create.mockResolvedValueOnce(mockResolve);
    savedObjectsClient.update.mockResolvedValueOnce({
      ...mockResolve,
      attributes: {
        queryDelay: {
          ...mockResolve.attributes.queryDelay,
          delay: 5,
        },
      },
    });

    // Try to update with new values
    const result = await client.queryDelay().update({
      delay: 5,
    });

    // Tried to get first, but no results
    expect(savedObjectsClient.get).toHaveBeenCalledWith(
      RULES_SETTINGS_SAVED_OBJECT_TYPE,
      RULES_SETTINGS_SAVED_OBJECT_ID
    );

    // So create a new entry
    expect(savedObjectsClient.create).toHaveBeenCalledWith(
      RULES_SETTINGS_SAVED_OBJECT_TYPE,
      {
        flapping: expect.objectContaining({
          enabled: true,
          lookBackWindow: 20,
          statusChangeThreshold: 4,
          createdBy: 'test name',
          updatedBy: 'test name',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
        queryDelay: expect.objectContaining({
          delay: mockAttributes.queryDelay.delay,
          createdBy: 'test name',
          updatedBy: 'test name',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
      },
      {
        id: RULES_SETTINGS_SAVED_OBJECT_ID,
        overwrite: true,
      }
    );

    // Try to update with version
    expect(savedObjectsClient.update).toHaveBeenCalledWith(
      RULES_SETTINGS_SAVED_OBJECT_TYPE,
      RULES_SETTINGS_SAVED_OBJECT_ID,
      {
        flapping: expect.objectContaining({
          enabled: true,
          lookBackWindow: 20,
          statusChangeThreshold: 4,
          createdBy: 'test name',
          updatedBy: 'test name',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
        queryDelay: expect.objectContaining({
          delay: 5,
          createdBy: 'test name',
          updatedBy: 'test name',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
      },
      { version: '123' }
    );

    expect(result).toEqual(
      expect.objectContaining({
        delay: 5,
      })
    );
  });

  test('can create new query delay rules settings when it does not exist and persist flapping settings', async () => {
    const client = new RulesSettingsClient(rulesSettingsClientParams);
    const mockAttributes = getMockRulesSettings();

    savedObjectsClient.get.mockResolvedValueOnce({
      id: RULES_SETTINGS_FEATURE_ID,
      type: RULES_SETTINGS_SAVED_OBJECT_TYPE,
      attributes: {
        flapping: {
          enabled: mockAttributes.flapping.enabled,
          lookBackWindow: 13,
          statusChangeThreshold: 13,
          createdBy: 'test name',
          updatedBy: 'test name',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        },
      },
      references: [],
    });

    savedObjectsClient.create.mockResolvedValueOnce({
      id: RULES_SETTINGS_FEATURE_ID,
      type: RULES_SETTINGS_SAVED_OBJECT_TYPE,
      attributes: mockAttributes,
      references: [],
    });

    const result = await client.getOrCreate();

    expect(savedObjectsClient.create).toHaveBeenCalledTimes(1);
    expect(savedObjectsClient.create).toHaveBeenCalledWith(
      RULES_SETTINGS_SAVED_OBJECT_TYPE,
      {
        flapping: expect.objectContaining({
          enabled: mockAttributes.flapping.enabled,
          lookBackWindow: 13,
          statusChangeThreshold: 13,
          createdBy: 'test name',
          updatedBy: 'test name',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
        queryDelay: expect.objectContaining({
          delay: 0,
          createdBy: 'test name',
          updatedBy: 'test name',
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
      },
      {
        id: RULES_SETTINGS_SAVED_OBJECT_ID,
        overwrite: true,
      }
    );
    expect(result.attributes).toEqual(mockAttributes);
  });
});
