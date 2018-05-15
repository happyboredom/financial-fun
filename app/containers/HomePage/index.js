import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import RiskButton from 'components/RiskButton'
import messages from './messages';
import { riskSelector } from './selectors';
import riskSelectorReducer from './reducer';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  chooseRisk(e) {
    console.log("risk chosen", e);
  }

  render() {
    console.log('foobar');
    return (
      <div id="home">
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <RiskButton value="1" title="Most Left" onClick={this.chooseRisk} />
        <RiskButton value="2" title="Left" onClick={this.chooseRisk}/>
        <RiskButton value="3" title="Right" onClick={this.chooseRisk} />
      </div>
    );
  }
}

HomePage.propTypes = {
  risklevel: PropTypes.number,
};

// export function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }
//
// const mapStateToProps = createSelector(
//   riskSelector(),
//   (risklevel) => ({ risklevel })
// );
//
// const withConnect = connect(mapStateToProps, mapDispatchToProps);
// const withReducer = injectReducer({key: 'homepage', riskSelectorReducer })
// export default compose(
//     withReducer,
//     withConnect,
// )(HomePage);
