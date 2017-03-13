import React from 'react';
import renderer from 'react-test-renderer';
import Del from '../src/Del';

test('should render', () => {
  const component = renderer.create(<Del>Del</Del>);
  expect(component.toJSON()).toMatchSnapshot();
});
