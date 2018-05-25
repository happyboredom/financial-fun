
import { fromJS } from 'immutable';
import riskPageReducer from '../reducer';
import {
  DEFAULT_RISK,
  } from '../../RiskPage/constants';

import {
    getRiskLevelProfile,
  } from '../sampledata';

describe('riskPageReducer', () => {
  it('returns the initial state', () => {
    expect(riskPageReducer(undefined, {})).toEqual(fromJS({
      risklevel: DEFAULT_RISK,
      riskdata: getRiskLevelProfile(DEFAULT_RISK),
    }));
  });
});
