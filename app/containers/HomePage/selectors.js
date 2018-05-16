import { createSelector } from 'reselect';

const selectRisk = (state) => state.get('risk');

const riskSelector = () => createSelector(
  selectRisk,
  (riskState) => riskState.get('risklevel')
);

export {
  selectRisk,
  riskSelector,
};
