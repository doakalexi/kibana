/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
import { PluginServiceFactory } from '@kbn/presentation-util-plugin/public';
import { observabilityAIAssistantPluginMock } from '@kbn/observability-ai-assistant-plugin/public/mock';
import { ObservabilityAIAssistantService } from './types';

type ObservabilityAIAssistantServiceFactory = PluginServiceFactory<ObservabilityAIAssistantService>;

export const observabilityAIAssistantServiceStubFactory: ObservabilityAIAssistantServiceFactory =
  () => {
    const pluginMock = observabilityAIAssistantPluginMock.createStartContract();
    return {
      start: pluginMock,
    };
  };
