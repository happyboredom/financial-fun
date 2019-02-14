
import { fromJS } from 'immutable';
import emailPreviewReducer from '../reducer';

describe('emailPreviewReducer', () => {
  it('returns the initial state', () => {
    expect(emailPreviewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
