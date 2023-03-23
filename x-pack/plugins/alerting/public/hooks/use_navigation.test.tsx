/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { act, renderHook } from '@testing-library/react-hooks';

import {
  useCreateMaintenanceWindowNavigation,
  useMaintenanceWindowsNavigation,
} from './use_navigation';
import { AppMockRenderer, createAppMockRenderer } from '../lib/test_utils';
import { APP_ID, MAINTENANCE_WINDOWS_APP_ID } from '../config/paths';

const mockNavigateTo = jest.fn();
const mockGetAppUrl = jest.fn();

jest.mock('../utils/kibana_react', () => {
  const originalModule = jest.requireActual('../utils/kibana_react');
  return {
    ...originalModule,
    useKibana: () => {
      const { services } = originalModule.useKibana();
      return {
        services: {
          ...services,
          application: { getUrlForApp: mockGetAppUrl, navigateToApp: mockNavigateTo },
        },
      };
    },
  };
});

let appMockRenderer: AppMockRenderer;

describe('useNavigation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    appMockRenderer = createAppMockRenderer();
  });

  describe('useMaintenanceWindowsNavigation', () => {
    it('it calls getMaintenanceWindowsUrl with correct arguments', () => {
      const { result } = renderHook(() => useMaintenanceWindowsNavigation(), {
        wrapper: appMockRenderer.AppWrapper,
      });

      act(() => {
        result.current.getMaintenanceWindowsUrl(false);
      });

      expect(mockGetAppUrl).toHaveBeenCalledWith(APP_ID, {
        absolute: false,
        path: '/',
        deepLinkId: MAINTENANCE_WINDOWS_APP_ID,
      });
    });

    it('it calls navigateToMaintenanceWindows with correct arguments', () => {
      const { result } = renderHook(() => useMaintenanceWindowsNavigation(), {
        wrapper: appMockRenderer.AppWrapper,
      });

      act(() => {
        result.current.navigateToMaintenanceWindows();
      });

      expect(mockNavigateTo).toHaveBeenCalledWith(APP_ID, {
        path: '/',
        deepLinkId: MAINTENANCE_WINDOWS_APP_ID,
      });
    });
  });

  describe('useCreateMaintenanceWindowNavigation', () => {
    it('it calls navigateToCreateMaintenanceWindow with correct arguments', () => {
      const { result } = renderHook(() => useCreateMaintenanceWindowNavigation(), {
        wrapper: appMockRenderer.AppWrapper,
      });

      act(() => {
        result.current.navigateToCreateMaintenanceWindow();
      });

      expect(mockNavigateTo).toHaveBeenCalledWith(APP_ID, {
        deepLinkId: MAINTENANCE_WINDOWS_APP_ID,
        path: 'create',
      });
    });
  });
});
