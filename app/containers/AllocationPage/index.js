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
import makeSelectAllocationPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class AllocationPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

AllocationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  allocationpage: makeSelectAllocationPage(),
});

function mapDispatchToProps(dispatch) {
  return {
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
