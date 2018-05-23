import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import {
    selectRiskAllocations,
    sumAllocations,
    makeInstructionData,
    selectTargetRisk
  } from './selectors';

import reducer from './reducer';
import saga from './saga';
import { defaultAction } from './actions';
import { TRANSACTION_COST } from './constants';
import {
    makeSelectRisklevel,
    makeSelectChartData
  } from '../RiskPage/selectors';


// CSS & Presentation
import styled from 'styled-components';
const TextInput = styled.input`
border:1px solid red;
border-radius:8px;
text-align:right;
`

const NumberTd = styled.td`
text-align:right;
`

export class AllocationPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('AllocationPage:', this.props.sample);
    let dataRows = (
        this.props.sample.map(
          (object, i) => {
            return (<tr key={i}>
              <td><label>{object.name}</label></td>
              <NumberTd>
                <TextInput
                  type="number"
                  name={object.category}
                  id={object.category}
                  placeholder={0}
                  onChange={this.props.onAllocationChange} />
              </NumberTd>
              <NumberTd>
              {object.currentPerAllocated.toFixed(0)}%
              </NumberTd>
              <NumberTd>
              {object.targetCash.toFixed(0)}
              </NumberTd>
            </tr>)
          })); //dataRows

      let instructions = (
        this.props.sample
          .map((object, i) => {
              let action = "";
              if (object.targetDifference < 0) {
                action = "Sell";
              } else if (object.targetDifference > 0) {
                action = "Buy";
              }
              if (action !== "") {
                let string = `${action} $${Math.abs(object.targetDifference.toFixed(2))} ${object.name}`;
                return (
                  <li key={object.category}>{string}</li>
            )}})
          .filter(instr => instr !== undefined));
      console.log("instructions", instructions);
      let instructionBlock = undefined;
      if (instructions.length > 0) {
        instructionBlock = (
          <div className="instructionBlock">
            <h3>Based on your current allocation you should make some adjustments.</h3>
            <ul>
              {instructions}
            </ul>
          </div>
        )
      }
    return (
      <div>
        <h1>How much do you have invested in each category?</h1>
        <table>
        <tbody>
          <tr>
            <th>Category</th>
            <th>Your amount</th>
            <th>% allocated</th>
            <th>Target</th>
          </tr>
          {dataRows}
        </tbody>
        </table>
        {instructionBlock}
      </div>
    );
  }
}

AllocationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  allocations: selectRiskAllocations(),
  total: sumAllocations(),
  // risklevel: makeSelectRisklevel(),
  riskdata: makeSelectChartData(),
  sample:selectTargetRisk(),
});

function mapDispatchToProps(dispatch) {
  return {
    onAllocationChange: (evt) => {
      return dispatch(defaultAction(evt))
    },
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'allocationPage', reducer });
const withSaga = injectSaga({ key: 'allocationPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AllocationPage);
