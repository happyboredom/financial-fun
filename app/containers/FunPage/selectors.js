import { createSelector } from 'reselect';

/**
 * Direct selector to the funPage state domain
 */
const selectFunPageDomain = (state) => state.get('funPage');
const selectRisklevel = (state) => state.get('risklevel');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FunPage
 */

const makeSelectRisklevel = () => createSelector(
  selectFunPageDomain,
  (substate) => {
    console.log('makeSelectRisklevel', substate);
    return parseInt(substate.get('risklevel'));
  }
);

export default makeSelectRisklevel;
export {
  selectFunPageDomain,
};
