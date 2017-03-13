import React from 'react';
import renderer from 'react-test-renderer';
import { PaginationItem } from 'cf-component-pagination';

test('should render', () => {
  const component = renderer.create(
    <PaginationItem type="number" label="PaginationLabel" onClick={() => {}}>
      PaginationItem
    </PaginationItem>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render active', () => {
  const component = renderer.create(
    <PaginationItem
      active
      type="number"
      label="PaginationLabel"
      onClick={() => {}}
    >
      PaginationItem
    </PaginationItem>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render disabled', () => {
  const component = renderer.create(
    <PaginationItem
      disabled
      type="number"
      label="PaginationLabel"
      onClick={() => {}}
    >
      PaginationItem
    </PaginationItem>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
