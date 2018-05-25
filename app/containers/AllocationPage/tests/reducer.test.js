
import { fromJS } from 'immutable';
import allocationPageReducer from '../reducer';
import {
  DEFAULT_RISK,
  } from '../../RiskPage/constants';

import {
    getRiskLevel,
  } from '../../RiskPage/sampledata';

describe('allocationPageReducer', () => {
  it('returns the initial state', () => {
    expect(allocationPageReducer(undefined, {})).toEqual(fromJS({
      allocations: {
        bond: 0,
        stocklargecap: 0,
        stockmidcap: 0,
        stockforeign: 0,
        stocksmallcap: 0,
      },
      risklevel: DEFAULT_RISK,
      riskdata: getRiskLevel(DEFAULT_RISK),
    }));
  });
});
