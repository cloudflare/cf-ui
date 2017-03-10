import React from 'react';
import renderer from 'react-test-renderer';
import { LayoutColumn } from 'cf-component-layout';

test('should render', () => {
  const component = renderer.create(
    <LayoutColumn width={5}>Content</LayoutColumn>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
