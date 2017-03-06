import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TableBuilderPropTypes from './TableBuilderPropTypes';
import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow
} from 'cf-component-table';

class TableBuilder extends React.Component {
  render() {
    const {
      rows,
      columns,
      striped,
      hover,
      bordered,
      condensed,
      flashes
    } = this.props;
    return (
      <Table
        striped={striped}
        hover={hover}
        bordered={bordered}
        condensed={condensed}
      >
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
                {columns.map(column => {
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

TableBuilder.propTypes = {
  tableName: PropTypes.string.isRequired,

  rows: TableBuilderPropTypes.rows.isRequired,
  columns: TableBuilderPropTypes.columns.isRequired,

  striped: PropTypes.bool,
  hover: PropTypes.bool,
  bordered: PropTypes.bool,
  condensed: PropTypes.bool,

  flashes: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const tableName = ownProps.tableName;
  const tableState = state.tables[tableName];
  return {
    flashes: (tableState && tableState.flashes) || {}
  };
}

export default connect(mapStateToProps)(TableBuilder);
