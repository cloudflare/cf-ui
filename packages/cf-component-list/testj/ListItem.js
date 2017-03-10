import React from 'react';
import renderer from 'react-test-renderer';
import { ListItem } from 'cf-component-list';

test('should render', () => {
  const component = renderer.create(<ListItem>ListItem</ListItem>);
  expect(component.toJSON()).toMatchSnapshot();
});
