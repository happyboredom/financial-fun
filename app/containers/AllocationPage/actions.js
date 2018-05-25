/*
 *
 * AllocationPage actions
 *
 */

import {
  DEFAULT_ACTION,
  CALCULATE_ALLOCATIONS_ACTION,
} from './constants';


import {
  RISK_PICKED,
} from '../RiskPage/constants';


export function setRiskLevel(val) {
  return {
    type: RISK_PICKED,
    risklevel: val,
  };
}


export function inputAllocationAction(evt) {
  const target = evt.target;
  return {
    type: DEFAULT_ACTION,
    name: target.name,
    value: target.value,
  };
}

export function calculateAllocations(formvalues) {
  return {
    type: CALCULATE_ALLOCATIONS_ACTION,
    value: formvalues,
  };
}
