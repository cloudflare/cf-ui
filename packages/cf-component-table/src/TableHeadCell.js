import React from 'react';
import PropTypes from 'prop-types';
import {
  filterStyle,
  filterNone,
  applyTheme,
  createComponent,
  connectStyles
} from 'cf-style-container';
import { TableCellStyles } from './TableCell';
import TableTheme from './TableTheme.js';

const TableHeadCellStyles = props => {
  const { theme, theadIndex, rowIndex, cellIndex } = props;
  const style = {
    textAlign: 'left',
    fontWeight: theme.tableHeadFontWeight,
    ':first-letter': {
      textTransform: 'capitalize'
    },
    verticalAlign: theadIndex != null ? 'bottom' : undefined,

    // For first th/td in the first row in the first thead or tbody
    borderTopLeftRadius: theadIndex === 0 && rowIndex === 0 && cellIndex === 0
      ? theme.borderRadius
      : undefined,
    // The last index is passed down as its complement so you can detect whether
    // it's the last child easily while preserving its magnitude

    // For last th/td in the first row in the first thead or tbody
    borderTopRightRadius: theadIndex === 0 && rowIndex === 0 && cellIndex < 0
      ? theme.borderRadius
      : undefined,

    // For first th/td (can be either) in the last row in the last thead, tbody, and tfoot
    borderBottomLeftRadius: theadIndex < 0 && rowIndex < 0 && cellIndex === 0
      ? theme.borderRadius
      : undefined,

    // For last th/td (can be either) in the last row in the last thead, tbody, and tfoot
    borderBottomRightRadius: theadIndex < 0 && rowIndex < 0 && cellIndex < 0
      ? theme.borderRadius
      : undefined
  };

  return filterNone(style);
};

class TableHeadCell extends React.Component {
  render() {
    const {
      is,
      className,
      children,
      condensed,
      striped,
      bordered,
      hover,
      bare,
      rowType,
      theadIndex,
      tbodyIndex,
      tfootIndex,
      rowIndex,
      cellIndex,
      width
    } = this.props;

    return React.createElement(is, { className }, this.props.children);
  }
}

TableHeadCell.propTypes = {
  is: PropTypes.oneOf(['th', 'div']),
  rowSpan: PropTypes.number,
  colSpan: PropTypes.number,
  condensed: PropTypes.bool,
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  hover: PropTypes.bool,
  bare: PropTypes.bool,
  rowType: PropTypes.string,
  theadIndex: PropTypes.number,
  tbodyIndex: PropTypes.number,
  tfootIndex: PropTypes.number,
  rowIndex: PropTypes.number,
  cellIndex: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

TableHeadCell.defaultProps = {
  is: 'th'
};

export const createTableHeadCell = (...styles) =>
  applyTheme(
    connectStyles(TableCellStyles, TableHeadCellStyles, ...styles)(
      TableHeadCell
    ),
    TableTheme
  );

export default createTableHeadCell();
