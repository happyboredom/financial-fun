/*
 *
 * AllocationPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

import {
  DEFAULT_RISK,
} from '../HomePage/constants';

import {getRiskLevel, getRiskLevelProfile} from '../FunPage/sampledata';

const initialState = fromJS({
  allocations:getRiskLevelProfile(DEFAULT_RISK),
  risklevel:DEFAULT_RISK,
  riskdata: getRiskLevel(DEFAULT_RISK),
});

const PROP_ALLOCATIONS = 'allocations';

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
