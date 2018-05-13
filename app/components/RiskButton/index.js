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
import styled from 'styled-components';

const Title = styled.h1`
color:red;`
class RiskButton extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = props
  }
  render() {
    return (
      <div>
        <Title>{this.state.title}</Title>
        {this.state.risk}
      </div>
    );
  }
}

RiskButton.propTypes = {
  risk:PropTypes.integer
};

export default RiskButton;
