import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import {
    makeSelectAllocationPage,
    sumAllocations,
    makeInstructionData
  } from './selectors';

import reducer from './reducer';
import saga from './saga';
import {defaultAction} from './actions';

import {makeSelectRisklevel, makeSelectChartData} from '../FunPage/selectors';

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
    console.log('AllocationPage:',
      `risklevel:${this.props.risklevel}`,
      this.props.riskdata);
    let dataRows = (
        Object.entries(this.props.allocations)
          .map((object, i) => {
            let percentAllocated = (object[1] / this.props.total) * 100;
            let targetRisk = this.props.riskdata.profile[object[0]];
            let difference = <span></span>
            let targetCash = this.props.total * (targetRisk/100);
            let targetDifference = targetCash - object[1];
            if (percentAllocated.toFixed(2) !== targetRisk.toFixed(2))
            {
              difference = (<span>{targetDifference.toFixed(2)}</span>)
            }
            return (<tr key={i}>
              <td><label>{object[0]}</label></td>
              <NumberTd>
                <TextInput
                  type="number"
                  name={object[0]}
                  id={object[0]}
                  placeholder={object[1]}
                  onChange={this.props.onAllocationChange} />
              </NumberTd>
              <NumberTd>
                {percentAllocated.toFixed(2)}%
              </NumberTd>
              <NumberTd>
                {targetRisk}%
              </NumberTd>
              <NumberTd>
                {difference}
              </NumberTd>
            </tr>)
    })); //dataRows

    return (
      <div>
        <p>selected risk: {this.props.risklevel}</p>
        <h1>What is your current allocation?</h1>
        <table>
        <tbody>
          <tr>
            <th>Category</th>
            <th>Your amount</th>
            <th>Current %</th>
            <th>Desired %</th>
            <th>You need</th>
          </tr>
          {dataRows}
        </tbody>
        </table>
        <div>Total: {this.props.total}</div>
      </div>
    );
  }
}

AllocationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  allocations: makeSelectAllocationPage(),
  total: sumAllocations(),
  risklevel: makeSelectRisklevel(),
  riskdata: makeSelectChartData(),
  instructions:makeInstructionData(),
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
