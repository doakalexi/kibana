/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { z } from 'zod';

/*
 * NOTICE: Do not edit this file manually.
 * This file is automatically generated by the OpenAPI Generator, @kbn/openapi-generator.
 */

import { RulePatchProps, RuleResponse } from '../../../model/rule_schema/rule_schemas.gen';

export type PatchRuleRequestBody = z.infer<typeof PatchRuleRequestBody>;
export const PatchRuleRequestBody = RulePatchProps;
export type PatchRuleRequestBodyInput = z.input<typeof PatchRuleRequestBody>;

export type PatchRuleResponse = z.infer<typeof PatchRuleResponse>;
export const PatchRuleResponse = RuleResponse;
