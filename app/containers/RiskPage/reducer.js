/* FunPage/reducer.js */
import { fromJS } from 'immutable';
import {
    getRiskLevel,
    getRiskLevelProfile,
    convertToChartData } from './sampledata';
import {
  RISK_PICKED,
  DEFAULT_RISK,
} from '../RiskPage/constants';

const initialState = fromJS({
  risklevel: DEFAULT_RISK,
  riskdata: getRiskLevelProfile(DEFAULT_RISK),
});

function funPageReducer(state = initialState, action) {
  console.log(`funPageReducer::${action.type}=${action.risklevel}`);
  console.log('funPageReducer state', state);
  switch (action.type) {
    case RISK_PICKED:
      return state
        .set('riskdata', getRiskLevelProfile(action.risklevel))
        .set('risklevel', action.risklevel);

    default:
      return state;
  }
}

export default funPageReducer;
