
import { fromJS } from 'immutable';
import funPageReducer from '../reducer';

describe('funPageReducer', () => {
  it('returns the initial state', () => {
    expect(funPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
