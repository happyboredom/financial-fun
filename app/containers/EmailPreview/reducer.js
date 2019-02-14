/*
 *
 * EmailPreview reducer
 *
 */

import { fromJS, setIn } from 'immutable';
import {
  DEFAULT_ACTION,
  ACTION_MAGAZINE_FETCH,
  ACTION_MAGAZINE_SUCCESS,
  ACTION_MAGAZINE_ERROR,
  ACTION_MAGAZINE_TOGGLE,
  ACTION_SHOW_HTML,
} from './constants';


import { selectEmailPreviewDomain } from './selectors';

const initialState = fromJS({
  'emailPreview':{
    'magazine':'no magazine',
    'selected':{},
    'htmlview':false,
    'options':[]
  }
});

function emailPreviewReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case ACTION_MAGAZINE_FETCH:
      return state.setIn(['emailPreview', 'magazine'], 'fetching');
    case ACTION_MAGAZINE_SUCCESS:
      return state.setIn(['emailPreview', 'magazine'], action.magazine);
    case ACTION_MAGAZINE_ERROR:
      return state.setIn(['emailPreview', 'magazine'], action.error);
    case ACTION_MAGAZINE_TOGGLE:
      if (action.checked) {
        return state.setIn(['emailPreview', 'selected', action.data.sourceURL], action.data);
      } else if (state.getIn(['emailPreview', 'selected', action.data.sourceURL])) {
        return state.deleteIn(['emailPreview', 'selected', action.data.sourceURL]);
      }
    case ACTION_SHOW_HTML:
      console.log(ACTION_SHOW_HTML);
      return state.setIn(['emailPreview', 'showhtmlview'], true);
    default:
      return state;
  }
}

export default emailPreviewReducer;
