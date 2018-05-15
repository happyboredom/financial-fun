import { fromJS } from 'immutable';

import {
  RISK_PICKED,
  DEFAULT_RISK,
} from './constants'; 

const initialState = fromJS({
  risklevel: DEFAULT_RISK,
});

function riskSelectorReducer(state = initialState, action) {
  switch (action.type) {
    case RISK_PICKED:
      return state
        .set('risklevel', action.value);
    default:
      return state;
  }
}

export default riskSelectorReducer;
