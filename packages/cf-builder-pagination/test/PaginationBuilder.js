const assert = require('assert');
const React = require('react');
const {mount} = require('enzyme');
const {PaginationBuilder} = require('../src/index');
const {PaginationItem} = require('cf-component-pagination');
const {createStub} = require('cf-test-stub');

describe('PaginationBuilderTest', () => {
  it('should render pagination', () => {
    const wrapper = mount(
      <PaginationBuilder
        onPageChange={() => {}}
        totalCount={100}
        page={1}
        perPage={20}/>
    );

    assert.ok(wrapper.find('.cf-pagination').length);

    const items = wrapper.find(PaginationItem);

    assert.equal(items.length, 7);

    assert.equal(items.at(0).prop('type'), 'prev');
    assert.equal(items.at(0).prop('label'), 'Previous Page');
    assert.equal(items.at(0).prop('disabled'), true);

    assert.equal(items.at(1).prop('type'), 'number');
    assert.equal(items.at(1).prop('label'), 'Page 1');
    assert.equal(items.at(1).prop('active'), true);

    assert.equal(items.at(2).prop('type'), 'number');
    assert.equal(items.at(2).prop('label'), 'Page 2');
    assert.equal(items.at(2).prop('active'), false);

    assert.equal(items.at(6).prop('type'), 'next');
    assert.equal(items.at(6).prop('label'), 'Next Page');
    assert.equal(items.at(6).prop('disabled'), false);
  });

  it('should render pagination with the last page active', () => {
    const wrapper = mount(
      <PaginationBuilder
        onPageChange={() => {}}
        totalCount={100}
        page={5}
        perPage={20}/>
    );

    const items = wrapper.find(PaginationItem);

    assert.equal(items.at(0).prop('disabled'), false);
    assert.equal(items.at(1).prop('active'), false);
    assert.equal(items.at(5).prop('active'), true);
    assert.equal(items.at(6).prop('disabled'), true);
  });

  it('should render with collapsed items', () => {
    const wrapper = mount(
      <PaginationBuilder
        onPageChange={() => {}}
        totalCount={20}
        page={6}
        perPage={1}/>
    );

    const items = wrapper.find(PaginationItem);

    assert.equal(items.length, 11);

    assert.equal(items.at(1).prop('type'), 'number');
    assert.equal(items.at(1).prop('label'), 'Page 1');

    assert.equal(items.at(2).prop('type'), 'ellipsis');

    assert.equal(items.at(3).prop('type'), 'number');
    assert.equal(items.at(3).prop('label'), 'Page 4');

    assert.equal(items.at(7).prop('type'), 'number');
    assert.equal(items.at(7).prop('label'), 'Page 8');

    assert.equal(items.at(8).prop('type'), 'ellipsis');

    assert.equal(items.at(9).prop('type'), 'number');
    assert.equal(items.at(9).prop('label'), 'Page 20');
  });

  it('should render pagination loading', () => {
    const wrapper = mount(
      <PaginationBuilder
        onPageChange={() => {}}
        totalCount={100}
        page={1}
        perPage={20}
        loading={true}/>
    );

    const items = wrapper.find(PaginationItem);

    assert.equal(items.at(1).prop('type'), 'loading');
  });

  it('should render pagination with an infoFormatter', () => {
    let called = false;

    const wrapper = mount(
      <PaginationBuilder
        onPageChange={() => {}}
        totalCount={100}
        page={2}
        perPage={20}
        infoFormatter={(start, end, totalItems) => {
          assert.equal(start, 21);
          assert.equal(end, 40);
          assert.equal(totalItems, 100);
          called = true;
        }}/>
    );

    assert.ok(called);
  });

  it('should should call onPageChange when clicking another page', () => {
    const onPageChange = createStub();

    const wrapper = mount(
      <PaginationBuilder
        onPageChange={onPageChange}
        totalCount={20}
        page={1}
        perPage={1}/>
    );

    const items = wrapper.find(PaginationItem);

    items.at(2).find('a').simulate('click');
    assert.ok(onPageChange.called);
    assert.equal(onPageChange.calls[0].args[0], 2);

    wrapper.setProps({ page: 2 });
    items.at(0).find('a').simulate('click');
    assert.ok(onPageChange.called);
    assert.equal(onPageChange.calls[1].args[0], 1);

    wrapper.setProps({ page: 1 });
    items.at(items.length - 1).find('a').simulate('click');
    assert.ok(onPageChange.called);
    assert.equal(onPageChange.calls[2].args[0], 2);
  });
});
