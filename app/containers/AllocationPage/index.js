/**
 *
 * AllocationPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {makeSelectAllocationPage, sumAllocations } from './selectors';
import reducer from './reducer';
import saga from './saga';
import {defaultAction} from './actions';

import {makeSelectRisklevel} from '../FunPage/selectors';

// CSS & Presentation
import styled from 'styled-components';
import 'react-rangeslider/lib/index.css'
const TextInput = styled.input`
border:1px solid red;
border-radius:8px;
text-align:right;
`


export class AllocationPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('AllocationPage:', this.props.allocations);
    return (
      <div>
        <h1>What is your current allocation?</h1>
        <table>
        <tbody>
          <tr>
            <th>cat</th>
            <th>your amount</th>
            <th>allocation</th>
          </tr>
        {Object.entries(this.props.allocations).map((object, i) =>
          <tr key={i}>
            <td>
              <label>{object[0]}</label>
            </td>
          <td>
            <TextInput
              type="number"
              name={object[0]}
              id={object[0]}
              placeholder={object[1]}
              onChange={this.props.onAllocationChange} />
          </td>
          <td>
            percentage
          </td>
          </tr>
        )}
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
  total: sumAllocations()
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
