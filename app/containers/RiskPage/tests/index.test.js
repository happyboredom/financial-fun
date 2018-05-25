import React from 'react';
import { shallow } from 'enzyme';
import { Grid } from 'react-bootstrap';

import { FunPage } from '../index';

describe('<FunPage />', () => {
  it('Expect a page', () => {
    const page = shallow(
      <FunPage
        onRiskSelect={() => null}
        onRiskSelectRow={() => null}
        risklevel={1}
        riskdata={{}}
      />);
    expect(page.find(Grid).length).toBe(1);
  });
});
