import React from 'react';
import renderer from 'react-test-renderer';
import { LayoutContainer } from 'cf-component-layout';

test('should render', () => {
  const component = renderer.create(<LayoutContainer />);
  expect(component.toJSON()).toMatchSnapshot();
});
