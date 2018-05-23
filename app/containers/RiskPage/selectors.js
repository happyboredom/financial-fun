import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import {DEFAULT_RISK} from '../RiskPage/constants';
import {getRiskLevel, getRiskLevelProfile} from '../RiskPage/sampledata';

/**
 * Direct selector to the funPage state domain
 */
const selectFunPageDomain = (state) => state.get('funPage');
const selectRisklevel = (state) => state.get('risklevel');

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
    let ssub = substate.get('riskdata');
    try {
      ssub = ssub.toJS();
      ssub = convertToChartData(ssub);
    } catch (err) {
    }
    return ssub;
  }
)

export {
  selectFunPageDomain,
};
