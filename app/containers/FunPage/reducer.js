/*
 *
 * FunPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

import {
  RISK_PICKED,
} from '../HomePage/constants';

const initialState = fromJS({
  risklevel: 0,
});

function funPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      console.log(`funPageReducer::${DEFAULT_ACTION}=${action.risklevel}`);
      return state
        .set('risklevel', action.risklevel);
    case RISK_PICKED:
      console.log(`funPageReducer::${RISK_PICKED}=${action.risklevel}`);
      return state
        .set('risklevel', action.risklevel);
    default:
      return state;
  }
}

export default funPageReducer;
