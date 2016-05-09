# cf-builder-table

> CloudFlare Table Builder

## Installation

```sh
$ npm install cf-builder-table
```

## Usage

```
const React = require('react');
const {render} = require('react-dom');
const {createStore, combineReducers, applyMiddleware} = require('redux');
const {Provider, connect} = require('react-redux');
const thunk = require('redux-thunk').default;
const {
  TableBuilder,
  tableReducer,
  tableActions
} = require('../../src/index');
const {TableCell} = require('cf-component-table');
const {Button} = require('cf-component-button');

const EXAMPLE_TABLE = 'EXAMPLE_TABLE';

const data: [
  { id: '1', name: 'James', coolness: 1 },
  { id: '2', name: 'David', coolness: -1 }
];

class Component extends React.Component {
  render() {
    return (
      <TableBuilder
        tableName={EXAMPLE_TABLE}
        rows={data.map(item => {
          return { id: item.id, cells: item };
        })}
        columns={[{
          label: 'Name',
          cell: cells => {
            return (
              <TableCell key="name">
                {cells.name}
              </TableCell>
            );
          }
        }, {
          label: 'Coolness',
          cell: cells => {
            return (
              <TableCell key="coolness">
                {cells.coolness.toString()}
              </TableCell>
            );
          }
        }]}/>
    );
  }
}

const reducer = combineReducers({
  tables: tableReducer
});

const store = createStore(reducer, {}, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <ConnectedComponent/>
  </Provider>,
  rootElement
);
```
