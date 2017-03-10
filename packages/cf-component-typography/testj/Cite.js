import React from 'react';
import renderer from 'react-test-renderer';
import Cite from '../src/Cite';

test('should render', () => {
  const component = renderer.create(<Cite>Cite</Cite>);
  expect(component.toJSON()).toMatchSnapshot();
});
