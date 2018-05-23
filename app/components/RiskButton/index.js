import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from '../commoncss'

function RiskButton(props) {
  let foo =  props.profile.map((object, i) => {
    return (<td key={i}>{object.value}</td>)
  });
  return (
    <tr onClick={props.onClickRow} data-risklevel={props.value}>
      <td>{props.title}</td>
      {foo}
    </tr>
  );
}

RiskButton.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  onClick: PropTypes.func,
};

export default RiskButton;
