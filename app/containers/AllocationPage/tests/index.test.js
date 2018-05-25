import React from 'react';
// import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { AllocationPage } from '../index';

describe('<AllocationPage />', () => {
  it('Expect to render page', () => {
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
