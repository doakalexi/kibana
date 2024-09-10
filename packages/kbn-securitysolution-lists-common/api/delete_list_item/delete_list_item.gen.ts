/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

/*
 * NOTICE: Do not edit this file manually.
 * This file is automatically generated by the OpenAPI Generator, @kbn/openapi-generator.
 *
 * info:
 *   title: Delete list item API endpoint
 *   version: 2023-10-31
 */

import { z } from '@kbn/zod';

import { ListId } from '../model/list_common.gen';
import { ListItem } from '../model/list_schemas.gen';

export type DeleteListItemRequestQuery = z.infer<typeof DeleteListItemRequestQuery>;
export const DeleteListItemRequestQuery = z.object({
  /**
   * Required if `list_id` and `value` are not specified
   */
  id: ListId.optional(),
  /**
   * Required if `id` is not specified
   */
  list_id: ListId.optional(),
  /**
   * Required if `id` is not specified
   */
  value: z.string().optional(),
  /**
   * Determines when changes made by the request are made visible to search
   */
  refresh: z.enum(['true', 'false', 'wait_for']).optional().default('false'),
});
export type DeleteListItemRequestQueryInput = z.input<typeof DeleteListItemRequestQuery>;

export type DeleteListItemResponse = z.infer<typeof DeleteListItemResponse>;
export const DeleteListItemResponse = z.union([ListItem, z.array(ListItem)]);
