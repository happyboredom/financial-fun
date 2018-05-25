import { fromJS } from 'immutable';
import { makeSelectRisklevel } from '../selectors';

describe('makeSelectRisklevel', () => {
  it('Expect risk', () => {
    const selected = makeSelectRisklevel();
    const emptyState = fromJS({});
    const defaultState = selected(emptyState);
    expect(defaultState).toEqual(5);
  });
});
