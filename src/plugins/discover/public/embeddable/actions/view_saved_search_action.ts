/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import type { ApplicationStart } from '@kbn/core/public';
import { SEARCH_EMBEDDABLE_TYPE } from '@kbn/discover-utils';
import { ViewMode } from '@kbn/embeddable-plugin/public';
import { i18n } from '@kbn/i18n';
import {
  apiCanAccessViewMode,
  apiHasType,
  apiIsOfType,
  CanAccessViewMode,
  EmbeddableApiContext,
  getInheritedViewMode,
  HasType,
} from '@kbn/presentation-publishing';
import type { Action } from '@kbn/ui-actions-plugin/public';

import type { DiscoverAppLocator } from '../../../common';
import { PublishesSavedSearch, apiPublishesSavedSearch } from '../types';
import { getDiscoverLocatorParams } from '../utils/get_discover_locator_params';

export const ACTION_VIEW_SAVED_SEARCH = 'ACTION_VIEW_SAVED_SEARCH';

type ViewSavedSearchActionApi = CanAccessViewMode & HasType & PublishesSavedSearch;

const compatibilityCheck = (
  api: EmbeddableApiContext['embeddable']
): api is ViewSavedSearchActionApi => {
  return (
    apiCanAccessViewMode(api) &&
    getInheritedViewMode(api) === ViewMode.VIEW &&
    apiHasType(api) &&
    apiIsOfType(api, SEARCH_EMBEDDABLE_TYPE) &&
    apiPublishesSavedSearch(api)
  );
};

export class ViewSavedSearchAction implements Action<EmbeddableApiContext> {
  public id = ACTION_VIEW_SAVED_SEARCH;
  public readonly type = ACTION_VIEW_SAVED_SEARCH;

  constructor(
    private readonly application: ApplicationStart,
    private readonly locator: DiscoverAppLocator
  ) {}

  async execute({ embeddable }: EmbeddableApiContext): Promise<void> {
    if (!compatibilityCheck(embeddable)) {
      return;
    }

    const locatorParams = getDiscoverLocatorParams(embeddable);
    await this.locator.navigate(locatorParams);
  }

  getDisplayName(): string {
    return i18n.translate('discover.savedSearchEmbeddable.action.viewSavedSearch.displayName', {
      defaultMessage: 'Open in Discover',
    });
  }

  getIconType(): string | undefined {
    return 'inspect';
  }

  async isCompatible({ embeddable }: EmbeddableApiContext) {
    const { capabilities } = this.application;
    const hasDiscoverPermissions =
      (capabilities.discover.show as boolean) || (capabilities.discover.save as boolean);
    return compatibilityCheck(embeddable) && hasDiscoverPermissions;
  }
}
