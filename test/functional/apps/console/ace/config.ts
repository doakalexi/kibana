/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import { FtrConfigProviderContext } from '@kbn/test';
import { configureHTTP2 } from '../../../../common/configure_http2';

export default async function ({ readConfigFile }: FtrConfigProviderContext) {
  const functionalConfig = await readConfigFile(require.resolve('../../../config.base.js'));

  return configureHTTP2({
    ...functionalConfig.getAll(),
    testFiles: [require.resolve('.')],
    kbnTestServer: {
      ...functionalConfig.get('kbnTestServer'),
      serverArgs: [
        ...functionalConfig.get('kbnTestServer.serverArgs'),
        // disabling the monaco editor to run tests for ace
        `--console.dev.enableMonaco=false`,
      ],
    },
  });
}
