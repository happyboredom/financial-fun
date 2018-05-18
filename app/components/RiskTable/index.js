/**
*
* RiskTable
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import RiskButton from '../RiskButton'

// CSS & Presentation
import styled from 'styled-components';
const RiskGrid = styled.div`
  display:grid;

  // desktop
  @media only screen and (min-width:1025px) {
    grid-template-columns: repeat(10, auto [col-start]);
  }
  // ipad
  @media only screen and (min-width:769px) and (max-width:1024px) {
    grid-template-columns: repeat(5, auto [col-start]);
  }
  // iphone plus
  @media only screen and (min-width:415px) and (max-width:768px) {
    grid-template-columns: repeat(2, auto [col-start]);
  }

  @media only screen and (max-width:414px) {
    grid-template-columns: repeat(1, auto [col-start]);
  }
`



function RiskTable(props) { // eslint-disable-line react/prefer-stateless-function
  return (
    <RiskGrid className="risktable">
      {props.data.map((object, i) =>
        <RiskButton
          key={i}
          name="g1"
          title={object.label}
          value={object.value}
          profile={object.profile}
          onClick={props.onClick} />)}
    </RiskGrid>
  );
}

RiskTable.propTypes = {
 onClick:PropTypes.func,
};

export default RiskTable;
