const React = require('react');
const { render } = require('react-dom');
const { createStore, combineReducers, applyMiddleware } = require('redux');
const { Provider, connect } = require('react-redux');
const thunk = require('redux-thunk').default;
const {
  TableBuilder,
  tableReducer,
  tableActions
} = require('../../src/index');
const { TableCell } = require('cf-component-table');
const { Button } = require('cf-component-button');

const EXAMPLE_TABLE = 'EXAMPLE_TABLE';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: '1', name: 'James', coolness: 1 },
        { id: '2', name: 'David', coolness: -1 }
      ]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState(
      {
        data: this.state.data.map(item => {
          return item.id === id
            ? { ...item, coolness: item.id === '1' ? Infinity : -Infinity }
            : item;
        })
      },
      () => {
        this.props.dispatch(
          tableActions.flashRow(EXAMPLE_TABLE, id, 'success')
        );
      }
    );
  }

  render() {
    return (
      <TableBuilder
        tableName={EXAMPLE_TABLE}
        rows={this.state.data.map(item => {
          return { id: item.id, cells: item };
        })}
        columns={[
          {
            label: 'Name',
            cell: cells => {
              return (
                <TableCell key="name">
                  {cells.name}
                </TableCell>
              );
            }
          },
          {
            label: 'Coolness',
            cell: cells => {
              return (
                <TableCell key="coolness">
                  {cells.coolness.toString()}
                </TableCell>
              );
            }
          },
          {
            label: 'Update',
            cell: cells => {
              return (
                <TableCell key="actions">
                  <Button onClick={this.handleClick.bind(null, cells.id)}>
                    Update
                  </Button>
                </TableCell>
              );
            }
          }
        ]}
      />
    );
  }
}

const ConnectedComponent = connect(() => ({}))(Component);

const reducer = combineReducers({
  tables: tableReducer
});

const store = createStore(reducer, {}, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <ConnectedComponent />
  </Provider>,
  document.getElementById('cf-builder-table--basic')
);
