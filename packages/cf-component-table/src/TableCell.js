import React from 'react';
import PropTypes from 'prop-types';
import {
  filterStyle,
  capitalize,
  filterNone,
  applyTheme,
  createComponent,
  connectStyles
} from 'cf-style-container';
import TableTheme from './TableTheme';

export const TableCellStyles = ({
  is,
  theme,
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
  align,
  width
}) =>
  filterNone({
    display: is === 'div' ? 'inline-block' : undefined,
    flex: is === 'div' ? 'auto' : undefined,

    // Baseline cell styles
    borderTop: ((theadIndex === 0 || tbodyIndex === 0) && rowIndex === 0) ||
      bare
      ? 0
      : `1px solid ${theme.tableBorderColor}`,
    lineHeight: theme.lineHeight,
    padding: condensed ? theme.tableCondensedPadding : theme.tablePadding,
    verticalAlign: 'middle',
    textAlign: align,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    width: width,

    // For first th/td in the first row in the first thead or tbody
    borderTopLeftRadius: tbodyIndex === 0 && rowIndex === 0 && cellIndex === 0
      ? theme.borderRadius
      : undefined,
    // The last index is passed down as its complement so you can detect whether
    // it's the last child easily while preserving its magnitude

    // For last th/td in the first row in the first thead or tbody
    borderTopRightRadius: tbodyIndex === 0 && rowIndex === 0 && cellIndex < 0
      ? theme.borderRadius
      : undefined,

    // For first th/td (can be either) in the last row in the last thead, tbody, and tfoot
    borderBottomLeftRadius: (tbodyIndex < 0 || tfootIndex < 0) &&
      rowIndex < 0 &&
      cellIndex === 0
      ? theme.borderRadius
      : undefined,

    // For last th/td (can be either) in the last row in the last thead, tbody, and tfoot
    borderBottomRightRadius: (tbodyIndex < 0 || tfootIndex < 0) &&
      rowIndex < 0 &&
      cellIndex < 0
      ? theme.borderRadius
      : undefined,

    // Clear border-radius for first and last td in the last row in the last
    // tbody for table with tfoot
    borderRadius: tfootIndex != null &&
      tbodyIndex < 0 &&
      rowIndex < 0 &&
      (cellIndex === 0 || cellIndex < 0)
      ? 0
      : undefined,

    // Responsive styles
    [`@media (max-width: ${theme.breakpoints.tablet})`]: {
      display: 'block',
      width: '100%',
      boxSizing: 'border-box',
      borderTopWidth: 0,
      borderTop: cellIndex === 0
        ? `1px solid ${theme.tableBordercolor}`
        : undefined
    },

    // Row Styles
    borderColor: theme[`table${capitalize(rowType)}BorderColor`],
    backgroundColor: striped && Math.abs(rowIndex) % 2 === 1
      ? theme[`tableStriped${capitalize(rowType)}Color`]
      : theme[`table${capitalize(rowType)}Color`],

    ':hover': hover
      ? { backgroundColor: theme[`tableHover${capitalize(rowType)}Color`] }
      : undefined,
    borderLeft: bordered ? `1px solid ${theme.tableBorderColor}` : undefined,

    [`@media screen and (max-width: ${theme.breakpoints.tablet})`]: {
      display: 'block',
      border: 'none',
      float: 'left',
      clear: 'left',
      padding: 0,

      // Mobile stripe issue fix
      backgroundColor: striped && Math.abs(rowIndex) % 2 === 1
        ? 'transparent'
        : undefined
    }
  });

class TableCell extends React.Component {
  render() {
    const { is, className, children, rowSpan, colSpan } = this.props;

    return React.createElement(
      is,
      {
        className,
        rowSpan: is === 'div' ? undefined : rowSpan,
        colSpan: is === 'div' ? undefined : colSpan
      },
      children
    );
  }
}

TableCell.propTypes = {
  is: PropTypes.oneOf(['td', 'div']),
  className: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  rowSpan: PropTypes.number,
  colSpan: PropTypes.number,
  headers: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
  // implicit style props
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

TableCell.defaultProps = {
  is: 'td',
  align: 'left'
};

export const createTableCell = (...styles) =>
  applyTheme(connectStyles(TableCellStyles, ...styles)(TableCell), TableTheme);

export default createTableCell();
