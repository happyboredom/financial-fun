
import {
  setRiskLevel,
  inputAllocationAction,
  calculateAllocations,
} from '../actions';
import {
  DEFAULT_ACTION,
  CALCULATE_ALLOCATIONS_ACTION,
} from '../constants';
import {
  RISK_PICKED,
} from '../../RiskPage/constants';

describe('AllocationPage setRiskLevel', () => {
  describe('Risk picked Action', () => {
    it('has a type of RISK_PICKED', () => {
      const expected = {
        type: RISK_PICKED,
        risklevel: 5,
      };
      expect(setRiskLevel(5)).toEqual(expected);
    });
  });
});

describe('AllocationPage inputAllocationAction', () => {
  describe('Risk picked Action', () => {
    it('has a type of RISK_PICKED', () => {
      const expected = {
        type: DEFAULT_ACTION,
        name: 'foo',
        value: 'bar',
      };
      expect(inputAllocationAction(
        {target:
          {
            name: 'foo',
            value: 'bar'
          }
        })
      ).toEqual(expected);
    });
  });
});

describe('AllocationPage calculateAllocations', () => {
  describe('Risk picked Action', () => {
    it('has a type of RISK_PICKED', () => {
      const expected = {
        type: CALCULATE_ALLOCATIONS_ACTION,
        value: [1, 2, 3],
      };
      expect(calculateAllocations([1, 2, 3])).toEqual(expected);
    });
  });
});
