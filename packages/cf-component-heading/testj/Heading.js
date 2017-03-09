import React from 'react';
import { Heading } from 'cf-component-heading';
import renderer from 'react-test-renderer';

test('should render size', () => {
  const component = renderer.create(<Heading size={2}>Heading</Heading>);
  expect(component.toJSON()).toMatchSnapshot();
});
