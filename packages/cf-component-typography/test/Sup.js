import React from 'react';
import renderer from 'react-test-renderer';
import Sup from '../src/Sup';

test('should render', () => {
  const component = renderer.create(<Sup>Sup</Sup>);
  expect(component.toJSON()).toMatchSnapshot();
});
