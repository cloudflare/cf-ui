import React from 'react';
import renderer from 'react-test-renderer';
import { Card } from 'cf-component-card';

test('should render', () => {
  const component = renderer.create(<Card>Card</Card>);
  expect(component.toJSON()).toMatchSnapshot();
});
