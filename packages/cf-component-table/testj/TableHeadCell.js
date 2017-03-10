import React from 'react';
import renderer from 'react-test-renderer';
import { TableHeadCell } from 'cf-component-table';

test('should render', () => {
  const component = renderer.create(
    <TableHeadCell>TableHeadCell</TableHeadCell>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render extra class name', () => {
  const component = renderer.create(
    <TableHeadCell className="extra">TableHeadCell</TableHeadCell>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
