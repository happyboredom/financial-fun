/*
 *
 * FunPage reducer
 *
 */

import { fromJS } from 'immutable';

import {
  RISK_PICKED,
} from '../HomePage/constants';

const initialState = fromJS({
  risklevel: 0,
});

function funPageReducer(state = initialState, action) {
  console.log(`funPageReducer::${action.type}=${action.risklevel}`);
  switch (action.type) {
    case RISK_PICKED:
      return state
        .set('chartdata', [{key:'awesome', value:10}])
        .set('risklevel', action.risklevel);
    default:
      return state;
  }
}

export default funPageReducer;
