import React from 'react';
import renderer from 'react-test-renderer';
import Kbd from '../src/Kbd';

test('should render', () => {
  const component = renderer.create(<Kbd>Kbd</Kbd>);
  expect(component.toJSON()).toMatchSnapshot();
});
