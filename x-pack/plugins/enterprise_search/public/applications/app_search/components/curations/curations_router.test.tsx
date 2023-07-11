/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import '../../__mocks__/engine_logic.mock';

import React from 'react';

import { shallow } from 'enzyme';

import { Routes, Route } from '@kbn/shared-ux-router';

import { CurationsRouter } from '.';

describe('CurationsRouter', () => {
  it('renders', () => {
    const wrapper = shallow(<CurationsRouter />);

    expect(wrapper.find(Routes)).toHaveLength(1);
    expect(wrapper.find(Route)).toHaveLength(4);
  });
});
