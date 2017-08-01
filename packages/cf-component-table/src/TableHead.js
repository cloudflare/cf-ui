import React from 'react';
import PropTypes from 'prop-types';
import {
  mapChildren,
  applyTheme,
  createComponent,
  connectStyles
} from 'cf-style-container';
import TableTheme from './TableTheme.js';

const TableHeadStyles = ({ theme }) => ({
  background: theme.tableHeadBackground,
  [`@media (max-width: ${theme.breakpoints.tablet})`]: {
    display: 'block',
    width: '100%',
    boxSizing: 'border-box'
  },
  [`@media screen and (max-width: ${theme.breakpoints.tablet})`]: {
    display: 'none'
  }
});

class TableHead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const table = this.node.parentNode;
    const theads = table.querySelectorAll('thead');
    let theadIndex;
    for (let i = 0; i < theads.length; i++) {
      if (theads.item(i) === this.node) {
        theadIndex = i;
        break;
      }
    }

    this.setState({ theadIndex });
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
            theadIndex: this.state.theadIndex,
            rowIndex: isLast ? -index : index
          });
        }
        return child;
      })
    );
  }
}

TableHead.propTypes = {
  is: PropTypes.oneOf(['thead', 'div']),
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
  // implicit style props
  condensed: PropTypes.bool,
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  hover: PropTypes.bool,
  bare: PropTypes.bool
};

TableHead.defaultProps = {
  is: 'thead'
};

export const createTableHead = (...styles) =>
  applyTheme(connectStyles(TableHeadStyles, ...styles)(TableHead), TableTheme);

export default createTableHead();
