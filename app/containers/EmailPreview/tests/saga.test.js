/* eslint-disable redux-saga/yield-effects */

import { take, call, put, select } from 'redux-saga/effects';
import getMagazine from '../saga';

describe('getMagazine Saga', () => {
  it('Expect some response', () => {
    let mag = getMagazine()
    expect(mag).toBeDefined();
  });
});
