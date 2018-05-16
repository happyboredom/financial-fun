/**
 *
 * FunPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'

import injectReducer from 'utils/injectReducer';
import makeSelectRisklevel from './selectors';
import reducer from './reducer';
import RiskButton from 'components/RiskButton';
import RiskTable from 'components/RiskTable';
import { setRiskLevel } from '../HomePage/actions';

export class FunPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('render props', this.props);
    return (
      <div>
        <h1>Choose your risk tolerance. {this.props.risklevel}</h1>
        <p>1 = Lowest Risk, 10 = highest risk.</p>
        <div>
          <Slider
            orientation="vertical"
            min={1}
            max={10}
            step={1}
            value={this.props.risklevel}
            onChange={this.props.onRiskSelect} />
          </div>
      </div>
    );
  }
}

FunPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onRiskSelect: PropTypes.func,
  risklevel: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  risklevel: makeSelectRisklevel(),
});

function mapDispatchToProps(dispatch) {
  return {
    onRiskSelect: (evt) => {
      return dispatch(setRiskLevel(evt))
    },
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'funPage', reducer });

export default compose(
  withReducer,
  withConnect,
)(FunPage);
