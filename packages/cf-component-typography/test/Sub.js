import React from 'react';
import renderer from 'react-test-renderer';
import Sub from '../src/Sub';

test('should render', () => {
  const component = renderer.create(<Sub>Sub</Sub>);
  expect(component.toJSON()).toMatchSnapshot();
});
