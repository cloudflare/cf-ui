import React from 'react';
import renderer from 'react-test-renderer';
import { TableCell } from 'cf-component-table';

test('should render', () => {
  const component = renderer.create(<TableCell>TableCell</TableCell>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render extra class name', () => {
  const component = renderer.create(
    <TableCell className="extra">TableCell</TableCell>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with align', () => {
  const component = renderer.create(
    <TableCell align="center">TableCell</TableCell>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
