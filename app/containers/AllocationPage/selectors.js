import { createSelector } from 'reselect';
import {
  PROP_ALLOCATIONS,
} from './constants';

import {
  DEFAULT_RISK,
} from '../HomePage/constants';

const selectAllocationPageDomain = (state) => state.get('allocationPage');
import {getRiskLevel} from '../FunPage/sampledata';

const sum = (values) => {
  return values.reduce((acc, cur) => { return acc+cur}, 0);
}

export const makeSelectAllocationPage = () => createSelector(
  selectAllocationPageDomain,
  (substate) => {
    let allocations = substate.get(PROP_ALLOCATIONS);
    if ( allocations == undefined ) {
      return getRiskLevel(DEFAULT_RISK);
    }

    return allocations.toJS();
  }
);

export const sumAllocations = () => createSelector(
  selectAllocationPageDomain,
  (substate) => {
    let allocations = substate.get(PROP_ALLOCATIONS);
    if ( allocations == undefined ) {
      return 0;
    }
    return sum(Object.values(allocations.toJS()))
  }
);

export const makeInstructionData = () => createSelector(
  selectAllocationPageDomain,
  (substate) => {
    let allocations = substate.get(PROP_ALLOCATIONS);
    if ( allocations == undefined ) {
      return [];
    }
    return [];
  }
)

export {
  selectAllocationPageDomain,
};
