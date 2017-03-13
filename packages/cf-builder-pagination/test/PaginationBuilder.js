import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { PaginationBuilder } from 'cf-builder-pagination';
import { PaginationItem } from 'cf-component-pagination';
import { createStub } from 'cf-test-stub';

test('should render pagination', () => {
  const component = renderer.create(
    <PaginationBuilder
      onPageChange={() => {}}
      totalCount={100}
      page={1}
      perPage={20}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render pagination with the last page active', () => {
  const component = renderer.create(
    <PaginationBuilder
      onPageChange={() => {}}
      totalCount={100}
      page={5}
      perPage={20}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render with collapsed items', () => {
  const component = renderer.create(
    <PaginationBuilder
      onPageChange={() => {}}
      totalCount={20}
      page={6}
      perPage={1}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render pagination loading', () => {
  const component = renderer.create(
    <PaginationBuilder
      onPageChange={() => {}}
      totalCount={100}
      page={1}
      perPage={20}
      loading={true}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render pagination with an infoFormatter', () => {
  let called = false;
  const component = renderer.create(
    <PaginationBuilder
      onPageChange={() => {}}
      totalCount={100}
      page={2}
      perPage={20}
      infoFormatter={(start, end, totalItems) => {
        expect(start).toBe(21);
        expect(end).toBe(40);
        expect(totalItems).toBe(100);
        called = true;
      }}
    />
  );
  expect(called).toBeTruthy();
  expect(component.toJSON()).toMatchSnapshot();
});

test('should should call onPageChange when clicking another page', () => {
  const onPageChange = createStub();

  const wrapper = mount(
    <PaginationBuilder
      onPageChange={onPageChange}
      totalCount={20}
      page={1}
      perPage={1}
    />
  );

  const items = wrapper.find(PaginationItem);

  items.at(2).find('a').simulate('click');
  expect(onPageChange.called).toBeTruthy();
  expect(onPageChange.calls[0].args[0]).toBe(2);

  wrapper.setProps({ page: 2 });
  items.at(0).find('a').simulate('click');
  expect(onPageChange.called).toBeTruthy;
  expect(onPageChange.calls[1].args[0]).toBe(1);

  wrapper.setProps({ page: 1 });
  items.at(items.length - 1).find('a').simulate('click');
  expect(onPageChange.called).toBeTruthy;
  expect(onPageChange.calls[2].args[0]).toBe(2);
});
