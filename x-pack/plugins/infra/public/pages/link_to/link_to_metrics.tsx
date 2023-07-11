/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import { match as RouteMatch, Redirect } from 'react-router-dom';
import { Routes, Route } from '@kbn/shared-ux-router';

import { RedirectToNodeDetail } from './redirect_to_node_detail';
import { RedirectToHostDetailViaIP } from './redirect_to_host_detail_via_ip';
import { RedirectToInventory } from './redirect_to_inventory';
import { inventoryModels } from '../../../common/inventory_models';

interface LinkToPageProps {
  match: RouteMatch<{}>;
}

const ITEM_TYPES = inventoryModels.map((m) => m.id).join('|');

export const LinkToMetricsPage: React.FC<LinkToPageProps> = (props) => {
  return (
    <Routes>
      <Route
        path={`${props.match.url}/:nodeType(${ITEM_TYPES})-detail/:nodeId`}
        component={RedirectToNodeDetail}
      />
      <Route
        path={`${props.match.url}/host-detail-via-ip/:hostIp`}
        component={RedirectToHostDetailViaIP}
      />
      <Route path={`${props.match.url}/inventory`} component={RedirectToInventory} />
      <Redirect to="/" />
    </Routes>
  );
};
