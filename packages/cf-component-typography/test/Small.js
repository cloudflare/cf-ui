import React from 'react';
import renderer from 'react-test-renderer';
import Small from '../src/Small';

test('should render', () => {
  const component = renderer.create(<Small>Small</Small>);
  expect(component.toJSON()).toMatchSnapshot();
});
