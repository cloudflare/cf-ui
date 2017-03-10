import React from 'react';
import renderer from 'react-test-renderer';
import { TableHead } from 'cf-component-table';

test('should render', () => {
  const component = renderer.create(<TableHead>TableHead</TableHead>);
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render extra class name', () => {
  const component = renderer.create(
    <TableHead className="extra">TableHead</TableHead>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
