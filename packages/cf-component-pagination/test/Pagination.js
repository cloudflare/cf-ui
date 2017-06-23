import React from 'react';
import {
  Pagination,
  PaginationRoot
} from '../../cf-component-pagination/src/index';
import { felaSnapshot } from 'cf-style-provider';

test('should render', () => {
  const snapshot = felaSnapshot(
    <Pagination PaginationRoot={PaginationRoot}>Pagination</Pagination>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with info', () => {
  const snapshot = felaSnapshot(
    <Pagination info="Pagination Info" PaginationRoot={PaginationRoot}>
      Pagination
    </Pagination>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
