import { createSelector } from 'reselect';
import {DEFAULT_RISK} from '../HomePage/constants';
import {getRiskLevel} from '../FunPage/sampledata';

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
    if (substate == undefined) {
      // will be undefined if I got to this page
      // without doing step 1.
      return DEFAULT_RISK;
    }

    let risklevel = substate.get('risklevel');
    if (risklevel == undefined) {
      return DEFAULT_RISK;
    } else {
      return parseInt(risklevel);
    }
  }
);

export const makeSelectChartData = () => createSelector(
  selectFunPageDomain,
  (substate) => {
    if (substate == undefined) {
      // will be undefined if I got to this page
      // without doing step 1.
      return getRiskLevelProfile(DEFAULT_RISK);
    }

    return substate.get('riskdata').toJS();
  }
)

export {
  selectFunPageDomain,
};
