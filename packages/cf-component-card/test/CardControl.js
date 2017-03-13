import React from 'react';
import renderer from 'react-test-renderer';
import { CardControl } from 'cf-component-card';

test('should render', () => {
  const component = renderer.create(<CardControl>CardControl</CardControl>);
  expect(component.toJSON()).toMatchSnapshot();
});
test('should render wide', () => {
  const component = renderer.create(
    <CardControl wide>CardControl</CardControl>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
