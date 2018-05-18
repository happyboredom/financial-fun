/*
 *
 * FunPage reducer
 *
 */

import { fromJS } from 'immutable';
import {getRiskLevel} from './sampledata';
import {
  RISK_PICKED,
} from '../HomePage/constants';

const initialState = fromJS({
  risklevel: 10,
  riskdata: getRiskLevel(10),
});

function funPageReducer(state = initialState, action) {
  console.log(`funPageReducer::${action.type}=${action.risklevel}`);
  switch (action.type) {
    case RISK_PICKED:
      return state
        .set('riskdata', getRiskLevel(action.risklevel))
        .set('risklevel', action.risklevel);

    default:
      return state;
  }
}

export default funPageReducer;
