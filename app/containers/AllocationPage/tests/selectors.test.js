import { sum } from '../selectors';

describe('sumArray', () => {
  it('Expect array sum', () => {
    expect(sum([1,2,3])).toEqual(6);
  });
});
