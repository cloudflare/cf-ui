import React from 'react';
import renderer from 'react-test-renderer';
import {
  PaginationItem,
  PaginationLink
} from '../../cf-component-pagination/src/index';
import felaTestContext from '../../../felaTestContext';

test('should render', () => {
  const component = renderer.create(
    felaTestContext(
      <PaginationItem
        type="number"
        label="PaginationLabel"
        onClick={() => {}}
        PaginationLink={PaginationLink}
      >
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
        PaginationLink={PaginationLink}
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
        PaginationLink={PaginationLink}
      >
        PaginationItem
      </PaginationItem>
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});
