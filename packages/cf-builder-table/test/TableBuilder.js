const assert = require('assert');
const React = require('react');
const {mount} = require('enzyme');
const {createStore, combineReducers, applyMiddleware} = require('redux');
const thunk = require('redux-thunk').default;
const {Provider} = require('react-redux');
const {
  tableActions,
  tableReducer,
  TableBuilder
} = require('../src/index');
const {
  Table,
  TableBody,
  TableRow,
  TableCell
} = require('cf-component-table');

describe('TableBuilderTest', () => {
  let store;

  beforeEach(() => {
    store = createStore(
      combineReducers({
        tables: tableReducer
      }),
      applyMiddleware(thunk)
    );
  });

  it('should render a table', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TableBuilder
          tableName="test-table"
          rows={[]}
          columns={[]}/>
      </Provider>
    );

    assert.ok(wrapper.find('.cf-table').length);
  });

  it('should render the dataset in columns', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TableBuilder
          tableName="test-table"
          rows={[
            { id: '1', cells: { name: 'Foo', value: 'foo' } },
            { id: '2', cells: { name: 'Bar', value: 'bar' } }
          ]}
          columns={[{
            label: 'Name',
            cell: (cells) => {
              return <TableCell key="name">{cells.name}</TableCell>;
            }
          }, {
            label: 'Value',
            cell: (cells) => {
              return <TableCell key="value">{cells.value}</TableCell>;
            }
          }]}/>
      </Provider>
    );

    const th = wrapper.find('th');
    const td = wrapper.find('td');

    assert.equal(th.length, 2);
    assert.equal(td.length, 4);

    assert.equal(th.at(0).text(), 'Name');
    assert.equal(th.at(1).text(), 'Value');

    assert.equal(td.at(0).text(), 'Foo');
    assert.equal(td.at(1).text(), 'foo');
    assert.equal(td.at(2).text(), 'Bar');
    assert.equal(td.at(3).text(), 'bar');
  });

  it('should support table props', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TableBuilder
          tableName="test-table" rows={[]} columns={[]}
          striped hover bordered condensed/>
      </Provider>
    );

    const table = wrapper.find(Table);

    assert.equal(table.prop('striped'), true);
    assert.equal(table.prop('hover'), true);
    assert.equal(table.prop('bordered'), true);
    assert.equal(table.prop('condensed'), true);
  });

  it('should support row type/accent', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TableBuilder
          tableName="test-table"
          rows={[
            { id: '1', type: 'success', cells: {} },
            { id: '2', accent: 'red', cells: {} }
          ]}
          columns={[]}/>
      </Provider>
    );

    const tr = wrapper.find(TableBody).find(TableRow);

    assert.equal(tr.at(0).prop('type'), 'success');
    assert.equal(tr.at(1).prop('accent'), 'red');
  });

  it('should support flashes', () => {
    const wrapper = mount(
      <Provider store={store}>
        <TableBuilder
          tableName="test-table"
          rows={[
            { id: '1', cells: {} },
            { id: '2', cells: {} }
          ]}
          columns={[]}/>
      </Provider>
    );

    store.dispatch(tableActions.flashRow('test-table', '1', 'success'));

    const row = wrapper
      .find(TableBody)
      .find(TableRow)
      .at(0);

    assert.equal(row.prop('type'), 'success');
  });
});
