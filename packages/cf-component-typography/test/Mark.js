import React from 'react';
import renderer from 'react-test-renderer';
import Mark from '../src/Mark';

test('should render', () => {
  const component = renderer.create(<Mark>Mark</Mark>);
  expect(component.toJSON()).toMatchSnapshot();
});
