import { createSelector } from 'reselect';

const selectAllocationPageDomain = (state) => state.get('allocationPage');
import {sampleAllocation} from '../FunPage/sampledata';


const calculate = () => {
  return;
}

const sum = (values) => {
  return values.reduce((acc, cur) => { return acc+cur}, 0);
}

export const makeSelectAllocationPage = () => createSelector(
  selectAllocationPageDomain,
  (substate) => {
    let allocations = substate.get('allocations');
    if ( allocations != undefined ) {
      return allocations.toJS();
    } else {
      return sampleAllocation;
    }
  }
);

export const sumAllocations = () => createSelector(
  selectAllocationPageDomain,
  (substate) => {
    let allocations = substate.get('allocations');
    if ( allocations != undefined ) {
      return sum(Object.values(allocations.toJS()))
    } else {
      return 0;
    }
    return substate;
  }
);

export {
  selectAllocationPageDomain,
};
