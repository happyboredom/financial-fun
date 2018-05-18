/**
*
* RiskButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from '../commoncss'

const RiskButtonLabel = styled.label`
  border:1px solid red;
  font-size:10px;
  display:block;
`

function AssetClass(props) {
  return (
    <div>
      <dt>{props.label}</dt>
      <dd>{props.value}</dd>
    </div>
  )
}

function RiskButton(props) {
  return (
    <RiskButtonLabel>
      <input name={props.name} type="radio" onClick={props.onClick} value={props.value} />
      <Title>
        {props.title} {props.value}
      </Title>
      <dl>
        {props.profile.map((object, i) =>
            <AssetClass
              key={object.id}
              label={object.label}
              value={object.value} />
        )}
      </dl>
    </RiskButtonLabel>
  );
}

RiskButton.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  onClick: PropTypes.func,
};

export default RiskButton;
