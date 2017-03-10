import React from 'react';
import renderer from 'react-test-renderer';
import { Code } from 'cf-component-code';

test('should render', () => {
  const component = renderer.create(<Code>Hello</Code>);
  expect(component.toJSON()).toMatchSnapshot();
});
