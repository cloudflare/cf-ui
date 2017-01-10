// @flow

import type {TableState} from './TableTypes';

const React = require('react');
const {PropTypes} = React;
const {connect} = require('react-redux');
const TableBuilderPropTypes = require('./TableBuilderPropTypes');
const {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow
} = require('cf-component-table');

class TableBuilder extends React.Component {
  static propTypes = {
    tableName: PropTypes.string.isRequired,

    rows: TableBuilderPropTypes.rows.isRequired,
    columns: TableBuilderPropTypes.columns.isRequired,

    striped: PropTypes.bool,
    hover: PropTypes.bool,
    bordered: PropTypes.bool,
    condensed: PropTypes.bool,

    flashes: PropTypes.object
  };

  render() {
    const {rows, columns, striped, hover, bordered, condensed, flashes} = this.props;
    return (
      <Table
        striped={striped}
        hover={hover}
        bordered={bordered}
        condensed={condensed}>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => {
              return (
                <TableHeadCell key={index}>
                  {column.label}
                </TableHeadCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            const type = flashes[row.id] || row.type;
            return (
              <TableRow key={row.id} type={type} accent={row.accent}>
                {columns.map((column) => {
                  return column.cell(row.cells);
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

function mapStateToProps(state: TableState, ownProps) {
  const tableName = ownProps.tableName;
  const tableState = state.tables[tableName];
  return {
    flashes: tableState && tableState.flashes || {}
  };
}

module.exports = connect(mapStateToProps)(TableBuilder);
