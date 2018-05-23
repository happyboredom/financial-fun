/*
 *
 * AllocationPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  PROP_ALLOCATIONS,
} from './constants';

import {
  DEFAULT_RISK,
} from '../HomePage/constants';

import {getRiskLevel, getRiskLevelProfile} from '../RiskPage/sampledata';

const initialState = fromJS({
  allocations:{
    bond:0,
    stocklargecap:0,
    stockmidcap:0,
    stockforeign:0,
    stocksmallcap:0,
  },
  risklevel:DEFAULT_RISK,
  riskdata: getRiskLevel(DEFAULT_RISK),
});

function allocationPageReducer(state = initialState, action) {
  let temp = state.get(PROP_ALLOCATIONS);
  switch (action.type) {
    case DEFAULT_ACTION:
      // setIn will update the nested "allocations" object
      return state
        .setIn([PROP_ALLOCATIONS, action.name], parseInt(action.value));
    default:
      return state;
  }
}

export default allocationPageReducer;
