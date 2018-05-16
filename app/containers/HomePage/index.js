import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';

import RiskButton from 'components/RiskButton';
import { riskSelector } from './selectors';
import { setRiskLevel } from './actions';
import reducer from './reducer';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <RiskButton title="Risk Level" value="1" onClick={this.props.onRiskSelect} />
    );
  }
}

HomePage.propTypes = {
  onRiskSelect:PropTypes.func,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homepage: riskSelector(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onRiskSelect: (evt) => dispatch(changeRiskLevel(evt.target.value)),
    dispatch,
  };
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key:'homePage', reducer});
export default compose(withReducer, withConnect,)(HomePage);

// export default (HomePage);
