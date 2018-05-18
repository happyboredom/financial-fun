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

export const makeSelectRisklevel = () => createSelector(
  selectFunPageDomain,
  (substate) => {
    console.log('makeSelectRisklevel', substate);
    return parseInt(substate.get('risklevel'));
  }
);

export const makeSelectChartData = () => createSelector(
  selectFunPageDomain,
  (substate) => {
    console.log('makeSelectChartData', substate);
    return substate.get('riskdata');
  }
)


export {
  selectFunPageDomain,
};
