import React from 'react';
import renderer from 'react-test-renderer';
import Ins from '../src/Ins';

test('should render', () => {
  const component = renderer.create(<Ins>Ins</Ins>);
  expect(component.toJSON()).toMatchSnapshot();
});
