import React from 'react';
import renderer from 'react-test-renderer';
import { PaginationItem } from '../../cf-component-pagination/src/index';
import { felaTestContext } from 'cf-style-provider';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(
      <PaginationItem type="number" label="PaginationLabel" onClick={() => {}}>
        PaginationItem
      </PaginationItem>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render active', () => {
  const component = renderer.create(
    felaTestContext(
      <PaginationItem
        active
        type="number"
        label="PaginationLabel"
        onClick={() => {}}
      >
        PaginationItem
      </PaginationItem>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render disabled', () => {
  const component = renderer.create(
    felaTestContext(
      <PaginationItem
        disabled
        type="number"
        label="PaginationLabel"
        onClick={() => {}}
      >
        PaginationItem
      </PaginationItem>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render active dot', () => {
  const component = renderer.create(
    felaTestContext(
      <PaginationItem
        active
        type="dot"
        label="PaginationLabel"
        onClick={() => {}}
      >
        PaginationItem
      </PaginationItem>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render disabled dot', () => {
  const component = renderer.create(
    felaTestContext(
      <PaginationItem
        disabled
        type="dot"
        label="PaginationLabel"
        onClick={() => {}}
      >
        PaginationItem
      </PaginationItem>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render active next', () => {
  const component = renderer.create(
    felaTestContext(
      <PaginationItem
        active
        type="next"
        label="PaginationLabel"
        onClick={() => {}}
      >
        PaginationItem
      </PaginationItem>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render disabled next', () => {
  const component = renderer.create(
    felaTestContext(
      <PaginationItem
        disabled
        type="next"
        label="PaginationLabel"
        onClick={() => {}}
      >
        PaginationItem
      </PaginationItem>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render active prev', () => {
  const component = renderer.create(
    felaTestContext(
      <PaginationItem
        active
        type="prev"
        label="PaginationLabel"
        onClick={() => {}}
      >
        PaginationItem
      </PaginationItem>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render disabled prev', () => {
  const component = renderer.create(
    felaTestContext(
      <PaginationItem
        disabled
        type="prev"
        label="PaginationLabel"
        onClick={() => {}}
      >
        PaginationItem
      </PaginationItem>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});
