import { createSelector } from 'reselect';

import { PROP_ALLOCATIONS, TRANSACTION_COST } from './constants';
import { DEFAULT_RISK } from '../RiskPage/constants';
import { getRiskLevel, getAllocationLabel } from '../RiskPage/sampledata';
import { makeSelectRisklevel, makeSelectChartData } from '../RiskPage/selectors';

const selectAllocationPageDomain = (state) => state.get('allocationPage');

const sum = (values) => {
  return values.reduce((acc, cur) => { return acc+cur}, 0);
}

export const selectRiskAllocations = () => createSelector(
  selectAllocationPageDomain,
  (substate) => {
    let allocations = substate.get(PROP_ALLOCATIONS);
    if ( allocations == undefined ) {
      return {};
    }
    return allocations.toJS();
  }
);

export const sumAllocations = () => createSelector(
  selectRiskAllocations(),
  (allocations) => {
    let val = sum(Object.values(allocations));
    return val
  }
);

export const selectRiskSummary = () => createSelector(
  selectAllocationPageDomain,
  makeSelectRisklevel(),
  (state, risklevel) => {
    return getRiskLevel(risklevel);
  }
);

export const selectTargetRisk = () => createSelector(
  selectAllocationPageDomain,
  selectRiskAllocations(),
  makeSelectChartData(),
  sumAllocations(),
  (state, inputAllocations, risklevel, sumTotal) => {
    return Object.entries(inputAllocations)
      .map((object, i) =>
      {
          let inputAlloc = object[0];
          let inputVal = object[1];
          let currentPerAllocated = 0;
          if (sumTotal > 0) {
            currentPerAllocated = (inputVal / sumTotal) * 100;
          }
          let targetAlloc = risklevel[inputAlloc];
          let targetCash = sumTotal * (targetAlloc/100);
          let targetDifference = targetCash - inputVal;
          return {
            name:getAllocationLabel(inputAlloc),
            category:inputAlloc,
            currentCash:inputVal,
            currentPerAllocated,
            targetCash,
            targetAlloc,
            targetDifference,
          };
      });
  });

export {
  selectAllocationPageDomain,
};
