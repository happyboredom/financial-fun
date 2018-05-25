import React from 'react';
// import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { AllocationPage } from '../index';

describe('<AllocationPage />', () => {
  it('Expect to have unit tests specified', () => {
    const component = renderer.create(
      <AllocationPage
        pagedata={[]}
        dispatch={() => null}
        riskSummary={{}}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
