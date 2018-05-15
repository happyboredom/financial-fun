/**
*
* RiskButton
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import PropTypes from 'prop-types';
import { Title } from '../commoncss'

class RiskButton extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = props
  }
  render() {
    return (
      <div onClick={this.state.onClick}>
        <Title>{this.state.title}</Title>
        {this.state.value}
      </div>
    );
  }
}

RiskButton.propTypes = {
  value:PropTypes.string,
};

export default RiskButton;
