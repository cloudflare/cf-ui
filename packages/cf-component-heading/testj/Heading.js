import React from 'react';
import Heading from '../src/Heading';
import renderer from 'react-test-renderer';

test('should render size', () => {
  const component = renderer.create(<Heading size={2}>Heading</Heading>);
  expect(component.toJSON()).toMatchSnapshot();
});
