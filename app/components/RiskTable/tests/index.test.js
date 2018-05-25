import React from 'react';

import { shallow } from 'enzyme';
import RiskTable from '../index';

describe('<RiskTable />', () => {
  it('Render a table', () => {
    const table = shallow(
      <RiskTable
        data={[]}
      />);
    expect(table.find('tr').length).toBe(1);
  });
});
