import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { tableActions, tableReducer, TableBuilder } from 'cf-builder-table';
import { Table, TableBody, TableRow, TableCell } from 'cf-component-table';

let store;

beforeEach(() => {
  store = createStore(
    combineReducers({
      tables: tableReducer
    }),
    applyMiddleware(thunk)
  );
});

test('should render a table', () => {
  const component = renderer.create(
    <Provider store={store}>
      <TableBuilder tableName="test-table" rows={[]} columns={[]} />
    </Provider>
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('should render the dataset in columns', () => {
  const component = renderer.create(
    <Provider store={store}>
      <TableBuilder
        tableName="test-table"
        rows={[
          { id: '1', cells: { name: 'Foo', value: 'foo' } },
          { id: '2', cells: { name: 'Bar', value: 'bar' } }
        ]}
        columns={[
          {
            label: 'Name',
            cell: cells => {
              return <TableCell key="name">{cells.name}</TableCell>;
            }
          },
          {
            label: 'Value',
            cell: cells => {
              return <TableCell key="value">{cells.value}</TableCell>;
            }
          }
        ]}
      />
    </Provider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should support table props', () => {
  const component = renderer.create(
    <Provider store={store}>
      <TableBuilder
        tableName="test-table"
        rows={[]}
        columns={[]}
        striped
        hover
        bordered
        condensed
      />
    </Provider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should support row type/accent', () => {
  const component = renderer.create(
    <Provider store={store}>
      <TableBuilder
        tableName="test-table"
        rows={[
          { id: '1', type: 'success', cells: {} },
          { id: '2', accent: 'red', cells: {} }
        ]}
        columns={[]}
      />
    </Provider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should support flashes', () => {
  const wrapper = mount(
    <Provider store={store}>
      <TableBuilder
        tableName="test-table"
        rows={[{ id: '1', cells: {} }, { id: '2', cells: {} }]}
        columns={[]}
      />
    </Provider>
  );
  store.dispatch(tableActions.flashRow('test-table', '1', 'success'));
  const row = wrapper.find(TableBody).find(TableRow).at(0);
  expect(row.prop('type')).toBe('success');
});
