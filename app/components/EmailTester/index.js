/**
*
* EmailTester
*
*/

import React from 'react';
import PropTypes from 'prop-types';

// import styled from 'styled-components';


function EmailTester(props) {
  return (
    <div style={props.style} className={props.className}>{props.children}</div>
  );
}

EmailTester.propTypes = {
  text: PropTypes.string
};

export default EmailTester;
