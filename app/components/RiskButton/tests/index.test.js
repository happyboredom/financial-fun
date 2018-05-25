import React from 'react';
import { shallow } from 'enzyme';

import RiskButton from '../index';

describe('<RiskButton />', () => {
  it('Renders a button', () => {
    const button = shallow(
      <RiskButton
        onClickRow={() => null}
        value={1}
        title="foo"
        profile={[{
            id: 'foo',
            value: 1,
          }]}
      />);
    expect(button.find('td').length).toBe(2);
  });
});
