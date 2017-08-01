import React from 'react';
import PropTypes from 'prop-types';
import { darken } from 'polished';
import {
  mapChildren,
  capitalize,
  applyTheme,
  createComponent,
  connectStyles
} from 'cf-style-container';
import TablePropTypes from './TablePropTypes';
import TableTheme from './TableTheme.js';

const TableRowStyles = ({ is, theme, tbodyIndex, rowIndex, type }) =>
  Object.assign(
    is === 'div'
      ? {
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'space-around',
          alignItems: 'center'
        }
      : {},
    {
      borderColor: theme[`table${capitalize(type)}BorderColor`],
      backgroundColor: theme[`table${capitalize(type)}Color`],

      [`@media (max-width: ${theme.breakpoints.tablet})`]: {
        display: 'block',
        width: '100%',
        boxSizing: 'border-box'
      },

      [`@media screen and (max-width: ${theme.breakpoints.tablet})`]: {
        display: 'block',
        padding: theme.tablePadding,
        borderTop: rowIndex === 0
          ? 'none'
          : `1px solid ${theme.tableBorderColor}`,
        ':after': {
          content: '""',
          display: 'table',
          clear: 'both'
        },
        backgroundColor: darken(0.2, theme.colorWhite),

        ':hover': {
          '> td': {
            backgroundColor: tbodyIndex >= 0 ? 'transparent' : undefined
          }
        }
      }
    }
  );

class TableRow extends React.Component {
  render() {
    const {
      is,
      className,
      type,
      children,
      condensed,
      striped,
      bordered,
      hover,
      bare,
      theadIndex,
      tbodyIndex,
      tfootIndex,
      rowIndex
    } = this.props;

    return React.createElement(
      is,
      { className },
      mapChildren(children, (child, index, children) => {
        const isLast = index === children.length - 1;
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            condensed,
            striped,
            bordered,
            hover,
            bare,
            rowType: type,
            theadIndex,
            tbodyIndex,
            tfootIndex,
            rowIndex,
            cellIndex: isLast ? -index : index
          });
        }
        return child;
      })
    );
  }
}

TableRow.propTypes = {
  is: PropTypes.oneOf(['tr', 'div']),
  className: PropTypes.string.isRequired,
  type: TablePropTypes.rowType,
  children: PropTypes.node,
  // implicit style props
  condensed: PropTypes.bool,
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  hover: PropTypes.bool,
  bare: PropTypes.bool,
  theadIndex: PropTypes.number,
  tbodyIndex: PropTypes.number,
  tfootIndex: PropTypes.number,
  rowIndex: PropTypes.number
};

TableRow.defaultProps = {
  is: 'tr',
  type: 'default'
};

export const createTableRow = (...styles) =>
  applyTheme(connectStyles(TableRowStyles, ...styles)(TableRow), TableTheme);

export default createTableRow();
