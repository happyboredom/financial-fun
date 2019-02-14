import { createSelector } from 'reselect';

/**
 * Direct selector to the emailPreview state domain
 */
const selectEmailPreviewDomain = (state) => state.get('emailPreview');

/**
 * Default selector used by EmailPreview
 */

const makeSelectEmailPreview = () => createSelector(
  selectEmailPreviewDomain,
  (substate) => substate.toJS()
);

const makeSelectMagazineData = () => createSelector(
  selectEmailPreviewDomain,
  (substate) => selectEmailPreviewDomain(substate).get('magazine')
);

const makeSelectSelectedItems = () => createSelector(
  selectEmailPreviewDomain,
  (substate) => substate.getIn(['emailPreview', 'selected'])
);

const makeSelectHtmlView = () => createSelector(
  selectEmailPreviewDomain,
  (substate) => substate.getIn(['emailPreview', 'showhtmlview'])
);

export default makeSelectEmailPreview;
export {
  selectEmailPreviewDomain,
  makeSelectMagazineData,
  makeSelectSelectedItems,
  makeSelectHtmlView,
};
