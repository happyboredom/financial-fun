/*
 *
 * AllocationPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  PROP_ALLOCATIONS,
  CALCULATE_ALLOCATIONS_ACTION,
} from './constants';

import {
  DEFAULT_RISK,
} from '../RiskPage/constants';

import { getRiskLevel } from '../RiskPage/sampledata';

const initialState = fromJS({
  allocations: {
    bond: 0,
    stocklargecap: 0,
    stockmidcap: 0,
    stockforeign: 0,
    stocksmallcap: 0,
  },
  risklevel: DEFAULT_RISK,
  riskdata: getRiskLevel(DEFAULT_RISK),
});

function allocationPageReducer(state = initialState, action) {

  switch (action.type) {
    case DEFAULT_ACTION:
      // setIn will update the nested "allocations" object
      return state
        .setIn([PROP_ALLOCATIONS, action.name], parseInt(action.value, 10));

    case CALCULATE_ALLOCATIONS_ACTION:
      let newstate = state;
      Object.entries(action.value)
        .forEach((obj) => {
          newstate = state.setIn([PROP_ALLOCATIONS, obj[0]], obj[1]);
          state = newstate;
        });
      return state;
    default:
      return state;
  }
}

export default allocationPageReducer;
