/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { cloneDeep } from 'lodash';
import { stateSchemaByVersion } from './task_state';

describe('invalidate pending api keys task state', () => {
  describe('v1', () => {
    const v1 = stateSchemaByVersion[1];
    it('should work on empty object when running the up migration', () => {
      const result = v1.up({});
      expect(result).toMatchInlineSnapshot(`
        Object {
          "runs": 0,
          "total_invalidated": 0,
        }
      `);
    });

    it(`shouldn't overwrite properties when running the up migration`, () => {
      const state = {
        runs: 1,
        total_invalidated: 2,
      };
      const result = v1.up(cloneDeep(state));
      expect(result).toEqual(state);
    });

    it('should drop unknown properties when running the up migration', () => {
      const state = { foo: true };
      const result = v1.up(state);
      expect(result).not.toHaveProperty('foo');
    });
  });
});
