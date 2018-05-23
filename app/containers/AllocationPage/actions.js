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
  console.log(`HomePage/actions::setRiskLevel ${val}`);
  return {
    type: RISK_PICKED,
    risklevel:val,
  };
}


export function defaultAction(evt) {
  let target = evt.target;
  return {
    type: DEFAULT_ACTION,
    name: target.name,
    value: target.value
  };
}

export function calculateAllocations(formvalues) {
  return {
    type: CALCULATE_ALLOCATIONS_ACTION,
    value: formvalues
  }
}
