/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { useSelector } from '@xstate/react';
import { orderBy } from 'lodash';
import React, { useCallback, useMemo } from 'react';
import { DEFAULT_SORT_DIRECTION, DEFAULT_SORT_FIELD } from '../../common/constants';
import { DataStreamStat } from '../../common/data_streams_stats/data_stream_stat';
import { tableSummaryAllText, tableSummaryOfText } from '../../common/translations';
import { getDatasetQualityTableColumns } from '../components/dataset_quality/columns';
import { useDatasetQualityContext } from '../components/dataset_quality/context';
import { FlyoutDataset } from '../state_machines/dataset_quality_controller';
import { useKibanaContextForPlugin } from '../utils';

export type Direction = 'asc' | 'desc';
export type SortField = keyof DataStreamStat;

const sortingOverrides: Partial<{ [key in SortField]: SortField }> = {
  ['title']: 'name',
  ['size']: 'sizeBytes',
};

export const useDatasetQualityTable = () => {
  const {
    services: { fieldFormats },
  } = useKibanaContextForPlugin();

  const { service } = useDatasetQualityContext();

  const { page, rowsPerPage, sort } = useSelector(service, (state) => state.context.table);

  const flyout = useSelector(service, (state) => state.context.flyout);

  const loading = useSelector(service, (state) => state.matches('datasets.fetching'));
  const loadingDegradedStats = useSelector(service, (state) =>
    state.matches('degradedDocs.fetching')
  );

  const datasets = useSelector(service, (state) => state.context.datasets);

  const isDatasetQualityPageIdle = useSelector(service, (state) =>
    state.matches('datasets.loaded.idle')
  );

  const closeFlyout = useCallback(() => service.send({ type: 'CLOSE_FLYOUT' }), [service]);
  const openFlyout = useCallback(
    (selectedDataset: FlyoutDataset) => {
      if (flyout?.dataset?.rawName === selectedDataset.rawName) {
        service.send({
          type: 'CLOSE_FLYOUT',
        });

        return;
      }

      if (isDatasetQualityPageIdle) {
        service.send({
          type: 'OPEN_FLYOUT',
          dataset: selectedDataset,
        });
        return;
      }

      service.send({
        type: 'SELECT_NEW_DATASET',
        dataset: selectedDataset,
      });
    },
    [flyout?.dataset?.rawName, isDatasetQualityPageIdle, service]
  );

  const columns = useMemo(
    () =>
      getDatasetQualityTableColumns({
        fieldFormats,
        selectedDataset: flyout?.dataset,
        openFlyout,
        loadingDegradedStats,
      }),
    [flyout?.dataset, fieldFormats, loadingDegradedStats, openFlyout]
  );

  const pagination = {
    pageIndex: page,
    pageSize: rowsPerPage,
    totalItemCount: datasets.length,
    hidePerPageOptions: true,
  };

  const onTableChange = useCallback(
    (options: {
      page: { index: number; size: number };
      sort?: { field: SortField; direction: Direction };
    }) => {
      service.send({
        type: 'UPDATE_TABLE_CRITERIA',
        criteria: {
          page: options.page.index,
          rowsPerPage: options.page.size,
          sort: {
            field: options.sort?.field || DEFAULT_SORT_FIELD,
            direction: options.sort?.direction || DEFAULT_SORT_DIRECTION,
          },
        },
      });
    },
    [service]
  );

  const renderedItems = useMemo(() => {
    const overridenSortingField = sortingOverrides[sort.field] || sort.field;
    const sortedItems = orderBy(datasets, overridenSortingField, sort.direction);

    return sortedItems.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  }, [sort.field, sort.direction, datasets, page, rowsPerPage]);

  const resultsCount = useMemo(() => {
    const startNumberItemsOnPage = rowsPerPage ?? 1 * page ?? 0 + (renderedItems.length ? 1 : 0);
    const endNumberItemsOnPage = rowsPerPage * page + renderedItems.length;

    return rowsPerPage === 0 ? (
      <strong>{tableSummaryAllText}</strong>
    ) : (
      <>
        <strong>
          {startNumberItemsOnPage}-{endNumberItemsOnPage}
        </strong>{' '}
        {tableSummaryOfText} {datasets.length}
      </>
    );
  }, [rowsPerPage, page, renderedItems.length, datasets.length]);

  return {
    sort: { sort },
    onTableChange,
    pagination,
    renderedItems,
    columns,
    loading,
    resultsCount,
    closeFlyout,
    selectedDataset: flyout?.dataset,
  };
};
