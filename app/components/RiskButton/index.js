import React from 'react';
import PropTypes from 'prop-types';

function RiskButton(props) {
  const tdItems = props.profile.map((object) => (<td key={object.id}>{object.value}</td>));
  return (
    <tr
      onClick={props.onClickRow}
      data-risklevel={props.value}
    >
      <td>{props.title}</td>
      {tdItems}
    </tr>
  );
}

RiskButton.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  profile: PropTypes.array,
  onClickRow: PropTypes.func,
};

export default RiskButton;
