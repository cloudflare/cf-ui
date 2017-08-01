import React from 'react';
import PropTypes from 'prop-types';
import {
  mapChildren,
  applyTheme,
  createComponent,
  connectStyles
} from 'cf-style-container';
import TableTheme from './TableTheme.js';

const TableFootStyles = ({ theme }) => ({
  [`@media (max-width: ${theme.breakpoints.tablet})`]: {
    display: 'block',
    width: '100%',
    boxSizing: 'border-box'
  }
});

class TableFoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const table = this.node.parentNode;
    const tfoots = table.querySelectorAll('tfoot');
    let tfootIndex;
    for (let i = 0; i < tfoots.length; i++) {
      if (tfoots.item(i) === this.node) {
        tfootIndex = i;
        break;
      }
    }

    this.setState({ tfootIndex });
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
            tfootIndex: this.state.tfootIndex,
            rowIndex: isLast ? -index : index
          });
        }
        return child;
      })
    );
  }
}

TableFoot.propTypes = {
  is: PropTypes.oneOf(['tfoot', 'div']),
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
  // implicit style props
  condensed: PropTypes.bool,
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  hover: PropTypes.bool,
  bare: PropTypes.bool
};

TableFoot.defaultProps = {
  is: 'tfoot'
};

export const createTableFoot = (...styles) =>
  applyTheme(connectStyles(TableFootStyles, ...styles)(TableFoot), TableTheme);

export default createTableFoot();
