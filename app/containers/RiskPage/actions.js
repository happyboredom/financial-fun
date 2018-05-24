/*
 *
 * FunPage actions
 *
 */

import {
  RISK_PICKED,
  DEFAULT_ACTION,
} from './constants';

export function defaultAction(risklevel) {
  console.log('defaultAction', risklevel);
  return {
    type: DEFAULT_ACTION,
    risklevel,
  };
}

export function setRiskLevel(val) {
  return {
    type: RISK_PICKED,
    risklevel:val,
  };
}
