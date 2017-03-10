import React from 'react';
import renderer from 'react-test-renderer';
import { LayoutRow } from 'cf-component-layout';

test('should render', () => {
  const component = renderer.create(<LayoutRow />);
  expect(component.toJSON()).toMatchSnapshot();
});
