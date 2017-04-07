import React from 'react';
import renderer from 'react-test-renderer';
import {
  Pagination,
  PaginationRoot
} from '../../cf-component-pagination/src/index';
import felaTestContext from '../../../felaTestContext';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(
      <Pagination PaginationRoot={PaginationRoot}>Pagination</Pagination>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with info', () => {
  const component = renderer.create(
    felaTestContext(
      <Pagination info="Pagination Info" PaginationRoot={PaginationRoot}>
        Pagination
      </Pagination>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});
