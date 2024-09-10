/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import expect from '@kbn/expect';
import { VisualizeConstants } from '@kbn/visualizations-plugin/common/constants';
import { PIE_CHART_VIS_NAME } from '../../../page_objects/dashboard_page';
import { FtrProviderContext } from '../../../ftr_provider_context';

export default function ({ getService, getPageObjects }: FtrProviderContext) {
  const browser = getService('browser');
  const dashboardPanelActions = getService('dashboardPanelActions');
  const dashboardAddPanel = getService('dashboardAddPanel');
  const dashboardVisualizations = getService('dashboardVisualizations');
  const { dashboard, header, discover, timePicker } = getPageObjects([
    'dashboard',
    'header',
    'discover',
    'timePicker',
  ]);
  const dashboardName = 'Dashboard Panel Controls Test';

  describe('dashboard panel context menu', function viewEditModeTests() {
    before(async function () {
      await dashboard.initTests();
      await dashboard.preserveCrossAppState();
      await dashboard.clickNewDashboard();
      await timePicker.setHistoricalDataRange();
      await dashboardAddPanel.addVisualization(PIE_CHART_VIS_NAME);
    });

    after(async function () {
      await dashboard.gotoDashboardLandingPage();
    });

    it('are hidden in view mode', async function () {
      await dashboard.saveDashboard(dashboardName);

      await dashboardPanelActions.expectMissingEditPanelAction();
      await dashboardPanelActions.expectMissingRemovePanelAction();
    });

    it('are shown in edit mode', async function () {
      await dashboard.switchToEditMode();

      const isContextMenuIconVisible = await dashboardPanelActions.isContextMenuIconVisible();
      expect(isContextMenuIconVisible).to.equal(true);

      await dashboardPanelActions.expectExistsEditPanelAction();
      await dashboardPanelActions.expectExistsClonePanelAction();
      await dashboardPanelActions.expectExistsRemovePanelAction();
      await dashboardPanelActions.expectExistsToggleExpandAction();
    });

    it('are shown in edit mode after a hard refresh', async () => {
      // Based off an actual bug encountered in a PR where a hard refresh in
      // edit mode did not show the edit mode controls.
      const currentUrl = await browser.getCurrentUrl();
      // The second parameter of true will include the timestamp in the url and
      // trigger a hard refresh.
      await browser.get(currentUrl.toString(), true);
      await header.waitUntilLoadingHasFinished();

      await dashboardPanelActions.expectExistsEditPanelAction();
      await dashboardPanelActions.expectExistsClonePanelAction();
      await dashboardPanelActions.expectExistsRemovePanelAction();

      // Get rid of the timestamp in the url.
      await browser.get(currentUrl.toString(), false);
    });

    describe('visualization object edit menu', () => {
      it('opens a visualization when edit link is clicked', async () => {
        await dashboardPanelActions.clickEdit();
        await header.waitUntilLoadingHasFinished();
        const currentUrl = await browser.getCurrentUrl();
        expect(currentUrl).to.contain(VisualizeConstants.EDIT_PATH);
      });

      it('deletes the visualization when delete link is clicked', async () => {
        await header.clickDashboard();
        await header.waitUntilLoadingHasFinished();
        await dashboardPanelActions.removePanel();

        const panelCount = await dashboard.getPanelCount();
        expect(panelCount).to.be(0);
      });
    });

    describe('saved search object edit menu', () => {
      const searchName = 'my search';

      before(async () => {
        await header.clickDiscover(true);
        await discover.clickNewSearchButton();
        await dashboardVisualizations.createSavedSearch({ name: searchName, fields: ['bytes'] });
        await header.waitUntilLoadingHasFinished();
        await header.clickDashboard();

        // The following tests require a fresh dashboard.
        await dashboard.gotoDashboardLandingPage();
        await dashboard.clickNewDashboard();

        const inViewMode = await dashboard.getIsInViewMode();
        if (inViewMode) await dashboard.switchToEditMode();
        await dashboardAddPanel.addSavedSearch(searchName);
      });

      it('should be one panel on dashboard', async () => {
        const panelCount = await dashboard.getPanelCount();
        expect(panelCount).to.be(1);
      });

      it('opens a saved search when edit link is clicked', async () => {
        await dashboardPanelActions.clickEdit();
        await header.waitUntilLoadingHasFinished();
        const queryName = await discover.getCurrentQueryName();
        expect(queryName).to.be(searchName);
      });

      it('deletes the saved search when delete link is clicked', async () => {
        await header.clickDashboard();
        await header.waitUntilLoadingHasFinished();
        await dashboardPanelActions.removePanel();

        const panelCount = await dashboard.getPanelCount();
        expect(panelCount).to.be(0);
      });
    });

    describe('on an expanded panel', function () {
      before('reset dashboard', async () => {
        const currentUrl = await browser.getCurrentUrl();
        await browser.get(currentUrl.toString(), false);
        await dashboardAddPanel.addVisualization(PIE_CHART_VIS_NAME);
        await dashboard.saveDashboard(dashboardName + '2');
        await dashboardPanelActions.clickExpandPanelToggle();
      });

      it('context menu actions are hidden in view mode', async function () {
        await dashboardPanelActions.expectMissingEditPanelAction();
        await dashboardPanelActions.expectMissingDuplicatePanelAction();
        await dashboardPanelActions.expectMissingRemovePanelAction();
      });

      describe('in edit mode', () => {
        it('switch to edit mode', async function () {
          await dashboard.switchToEditMode();
        });

        it('some context menu actions should be present', async function () {
          await dashboardPanelActions.expectExistsEditPanelAction();
          await dashboardPanelActions.expectExistsClonePanelAction();
        });

        it('"remove panel" action should not be present', async function () {
          await dashboardPanelActions.expectMissingRemovePanelAction();
        });
      });
    });
  });
}
