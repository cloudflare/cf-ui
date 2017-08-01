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

const TableBodyStyles = ({ theme, tbodyIndex }) =>
  filterNone({
    borderTop: tbodyIndex > 0
      ? '2px solid ${theme.tableBorderColor}'
      : undefined,

    [`@media (max-width: ${theme.breakpoints.tablet})`]: {
      display: 'block',
      width: '100%',
      boxSizing: 'border-box'
    },

    [`@media screen and (max-width: ${theme.breakpoints.tablet})`]: {
      display: 'block'
    }
  });

class TableBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const table = this.node.parentNode;
    const tbodies = table.querySelectorAll('tbody');
    let tbodyIndex;
    for (let i = 0; i < tbodies.length; i++) {
      if (tbodies.item(i) === this.node) {
        tbodyIndex = i;
        break;
      }
    }

    this.setState({ tbodyIndex });
  }

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
      {
        className,
        ref: node => {
          this.node = node;
        }
      },
      mapChildren(children, (child, index, children) => {
        const isLast = index === children.length - 1;
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            condensed,
            striped,
            bordered,
            hover,
            bare,
            tbodyIndex: this.state.tbodyIndex,
            rowIndex: isLast ? -index : index
          });
        }
        return child;
      })
    );
  }
}

TableBody.propTypes = {
  is: PropTypes.oneOf(['tbody', 'div']),
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
  // implicit style props
  condensed: PropTypes.bool,
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  hover: PropTypes.bool,
  bare: PropTypes.bool
};

TableBody.defaultProps = {
  is: 'tbody'
};

export const createTableBody = (...styles) =>
  applyTheme(connectStyles(TableBodyStyles, ...styles)(TableBody), TableTheme);

export default createTableBody();
