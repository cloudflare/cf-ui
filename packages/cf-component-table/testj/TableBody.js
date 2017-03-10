import React from 'react';
import renderer from 'react-test-renderer';
import { TableBody } from 'cf-component-table';

test('should render', () => {
  const component = renderer.create(<TableBody>TableBody</TableBody>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render extra class names', () => {
  const component = renderer.create(
    <TableBody className="extra">TableBody</TableBody>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
