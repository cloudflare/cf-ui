import React from 'react';
import PropTypes from 'prop-types';
import {
  mapChildren,
  filterNone,
  applyTheme,
  createComponent,
  connectStyles
} from 'cf-style-container';
import TableTheme from './TableTheme.js';

const TableStyles = ({ theme, bordered }) =>
  filterNone({
    background: theme.colorWhite,
    borderCollapse: bordered ? 'separate' : 'collapse',
    borderSpacing: 0,
    maxWidth: '100%',
    width: '100%',

    // Table styles
    border: bordered ? '1px solid ${theme.tableBorderColor}' : undefined,
    borderLeft: bordered ? 0 : undefined,

    [`@media (max-width: ${theme.breakpoints.tablet})`]: {
      display: 'block',
      width: '100%',
      boxSizing: 'border-box'
    },

    [`@media screen and (max-width: ${theme.breakpoints.tablet})`]: {
      display: 'block'
    }
  });

class Table extends React.Component {
  render() {
    const {
      is,
      className,
      striped,
      hover,
      bordered,
      condensed,
      bare,
      children
    } = this.props;

    return React.createElement(
      is,
      { className },
      mapChildren(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            condensed,
            striped,
            bordered,
            hover,
            bare
          });
        }
        return child;
      })
    );
  }
}

Table.propTypes = {
  is: PropTypes.oneOf(['table', 'div']),
  className: PropTypes.string.isRequired,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  bordered: PropTypes.bool,
  condensed: PropTypes.bool,
  bare: PropTypes.bool,
  children: PropTypes.node
};

Table.defaultProps = {
  is: 'table',
  striped: false,
  hover: false,
  bordered: true,
  condensed: false,
  bare: false
};

export const createTable = (...styles) =>
  applyTheme(connectStyles(TableStyles, ...styles)(Table), TableTheme);

export default createTable();
