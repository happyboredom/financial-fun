import { createSelector } from 'reselect';
import { DEFAULT_RISK } from '../RiskPage/constants';
import { getRiskLevelProfile } from '../RiskPage/sampledata';

/**
 * Direct selector to the funPage state domain
 */
const selectFunPageDomain = (state) => state.get('funPage');

export const makeSelectRisklevel = () => createSelector(
  selectFunPageDomain,
  (substate) => {
    if (substate === undefined) {
      // will be undefined if I got to this page
      // without doing step 1.
      return DEFAULT_RISK;
    }

    const risklevel = substate.get('risklevel');
    if (risklevel === undefined) {
      return DEFAULT_RISK;
    }

    return parseInt(risklevel, 10);
  }
);

export const makeSelectChartData = () => createSelector(
  selectFunPageDomain,
  (substate) => {
    if (substate === undefined) {
      // will be undefined if I got to this page
      // without doing step 1.
      return getRiskLevelProfile(DEFAULT_RISK);
    }
    let ssub = substate.get('riskdata');
    try {
      // this step normalizes the initialState
      // into the output that the rest of the
      // app uses.
      ssub = ssub.toJS();
    } catch (err) {
      // do nothing
    }
    return ssub;
  }
);

export {
  selectFunPageDomain,
};
