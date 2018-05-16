import {
  RISK_PICKED,
} from './constants';

export function setRiskLevel(val) {
  console.log(`HomePage/actions::setRiskLevel ${val}`);
  return {
    type: RISK_PICKED,
    risklevel:val,
  };
}
