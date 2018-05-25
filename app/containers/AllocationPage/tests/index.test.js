import React from 'react';
import { shallow } from 'enzyme';
import { AllocationPage } from '../index';

describe('<AllocationPage />', () => {
  it('Expect 4 columns in header row', () => {
    const component = shallow(
      <AllocationPage
        pagedata={[]}
        dispatch={() => null}
        riskSummary={{}}
      />
    );
    expect(component.find('th').length).toBe(4);
  });
});
