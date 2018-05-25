import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import RiskButton from '../RiskButton';


function RiskTable(props) { // eslint-disable-line react/prefer-stateless-function
  return (
    <Table striped bordered hover responsive className="risktable">
      <thead>
        <tr>
          <th>Risk Level</th>
          <th>Small Cap</th>
          <th>Mid Cap</th>
          <th>Large Cap</th>
          <th>Foreign</th>
          <th>Bond</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((object) =>
          (<RiskButton
            key={object.reactkey + object.label}
            name="g1"
            title={object.label}
            value={object.value}
            profile={object.profile}
            onClickRow={props.onClickRow}
            onClick={props.onClick}
          />))}
      </tbody>
    </Table>
  );
}

RiskTable.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.array,
};

export default RiskTable;
