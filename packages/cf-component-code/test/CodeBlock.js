import React from 'react';
import renderer from 'react-test-renderer';
import { CodeBlock } from 'cf-component-code';

test('should render', () => {
  const component = renderer.create(<CodeBlock>Hello</CodeBlock>);
  expect(component.toJSON()).toMatchSnapshot();
});
