import React from 'react';
import { connect } from 'react-redux';
import { TableBuilder, tableReducer, tableActions } from 'cf-builder-table';
import { TableCell } from 'cf-component-table';
import { Button as ButtonUnstyled, ButtonTheme } from 'cf-component-button';
import { applyTheme } from 'cf-style-container';

const Button = applyTheme(ButtonUnstyled, ButtonTheme);

const EXAMPLE_TABLE = 'EXAMPLE_TABLE';

class BuilderTable extends React.Component {
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
                  <Button
                    type="default"
                    onClick={this.handleClick.bind(null, cells.id)}
                  >
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

export default connect(() => ({}))(BuilderTable);
