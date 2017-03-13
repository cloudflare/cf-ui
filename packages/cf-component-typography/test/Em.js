import React from 'react';
import renderer from 'react-test-renderer';
import Em from '../src/Em';

test('should render', () => {
  const component = renderer.create(<Em>Em</Em>);
  expect(component.toJSON()).toMatchSnapshot();
});
