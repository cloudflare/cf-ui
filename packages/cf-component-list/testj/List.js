import React from 'react';
import renderer from 'react-test-renderer';
import { List } from 'cf-component-list';

test('should render', () => {
  const component = renderer.create(<List>List</List>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render ordered', () => {
  const component = renderer.create(<List ordered>List</List>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render unstyled', () => {
  const component = renderer.create(<List unstyled>List</List>);
  expect(component.toJSON()).toMatchSnapshot();
});
