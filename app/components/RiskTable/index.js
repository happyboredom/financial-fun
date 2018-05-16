/**
*
* RiskTable
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import RiskButton from '../RiskButton'

function RiskTable(props) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div>
      <RiskButton name="g1" title="Low" value="1" onClick={props.onClick} />
      <RiskButton name="g1" title="Medium" value="2" onClick={props.onClick} />
      <RiskButton name="g1" title="High" value="3" onClick={props.onClick} />
    </div>
  );
}

RiskTable.propTypes = {
 onClick:PropTypes.func,
};

export default RiskTable;
