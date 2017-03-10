import React from 'react';
import renderer from 'react-test-renderer';
import { TableRow } from 'cf-component-table';

test('should render', () => {
  const component = renderer.create(<TableRow>TableRow</TableRow>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render extra class name', () => {
  const component = renderer.create(
    <TableRow className="extra">TableRow</TableRow>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with type', () => {
  const component = renderer.create(<TableRow type="error">TableRow</TableRow>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with accent', () => {
  const component = renderer.create(
    <TableRow accent="orange">TableRow</TableRow>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
