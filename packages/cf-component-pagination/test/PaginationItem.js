import React from 'react';
import { PaginationItem } from '../../cf-component-pagination/src/index';
import { felaSnapshot } from 'cf-style-provider';

test('should render', () => {
  const snapshot = felaSnapshot(
    <PaginationItem type="number" label="PaginationLabel" onClick={() => {}}>
      PaginationItem
    </PaginationItem>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render active', () => {
  const snapshot = felaSnapshot(
    <PaginationItem
      active
      type="number"
      label="PaginationLabel"
      onClick={() => {}}
    >
      PaginationItem
    </PaginationItem>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render disabled', () => {
  const snapshot = felaSnapshot(
    <PaginationItem
      disabled
      type="number"
      label="PaginationLabel"
      onClick={() => {}}
    >
      PaginationItem
    </PaginationItem>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render active dot', () => {
  const snapshot = felaSnapshot(
    <PaginationItem
      active
      type="dot"
      label="PaginationLabel"
      onClick={() => {}}
    >
      PaginationItem
    </PaginationItem>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render disabled dot', () => {
  const snapshot = felaSnapshot(
    <PaginationItem
      disabled
      type="dot"
      label="PaginationLabel"
      onClick={() => {}}
    >
      PaginationItem
    </PaginationItem>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render active next', () => {
  const snapshot = felaSnapshot(
    <PaginationItem
      active
      type="next"
      label="PaginationLabel"
      onClick={() => {}}
    >
      PaginationItem
    </PaginationItem>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render disabled next', () => {
  const snapshot = felaSnapshot(
    <PaginationItem
      disabled
      type="next"
      label="PaginationLabel"
      onClick={() => {}}
    >
      PaginationItem
    </PaginationItem>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render active prev', () => {
  const snapshot = felaSnapshot(
    <PaginationItem
      active
      type="prev"
      label="PaginationLabel"
      onClick={() => {}}
    >
      PaginationItem
    </PaginationItem>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render disabled prev', () => {
  const snapshot = felaSnapshot(
    <PaginationItem
      disabled
      type="prev"
      label="PaginationLabel"
      onClick={() => {}}
    >
      PaginationItem
    </PaginationItem>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
