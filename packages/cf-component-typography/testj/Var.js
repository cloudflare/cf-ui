import React from 'react';
import renderer from 'react-test-renderer';
import Var from '../src/Var';

test('should render', () => {
  const component = renderer.create(<Var>Var</Var>);
  expect(component.toJSON()).toMatchSnapshot();
});
