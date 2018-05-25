/* FunPage/reducer.js */
import { fromJS } from 'immutable';
import {
    getRiskLevelProfile,
  } from './sampledata';
import {
  RISK_PICKED,
  DEFAULT_RISK,
  } from '../RiskPage/constants';

const initialState = fromJS({
  risklevel: DEFAULT_RISK,
  riskdata: getRiskLevelProfile(DEFAULT_RISK),
});

function riskPageReducer(state = initialState, action) {
  switch (action.type) {
    case RISK_PICKED:
      return state
        .set('riskdata', getRiskLevelProfile(action.risklevel))
        .set('risklevel', action.risklevel);

    default:
      return state;
  }
}

export default riskPageReducer;
