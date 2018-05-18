import { createSelector } from 'reselect';

/**
 * Direct selector to the allocationPage state domain
 */
const selectAllocationPageDomain = (state) => state.get('allocationPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AllocationPage
 */

const makeSelectAllocationPage = () => createSelector(
  selectAllocationPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectAllocationPage;
export {
  selectAllocationPageDomain,
};
