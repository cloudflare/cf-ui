import React from 'react';
import renderer from 'react-test-renderer';
import Samp from '../src/Samp';

test('should render', () => {
  const component = renderer.create(<Samp>Samp</Samp>);
  expect(component.toJSON()).toMatchSnapshot();
});
