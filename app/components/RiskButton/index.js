/**
*
* RiskButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { Title } from '../commoncss'

function RiskButton(props) {
  return (
    <label>
      <Title>
        <input name={props.name} type="radio" onClick={props.onClick} value={props.value} />
        {props.title} {props.value}
      </Title>
    </label>
  );
}

RiskButton.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default RiskButton;
