import React from 'react';
import renderer from 'react-test-renderer';
import Strong from '../src/Strong';

test('should render', () => {
  const component = renderer.create(<Strong>Strong</Strong>);
  expect(component.toJSON()).toMatchSnapshot();
});
