import React, { PropTypes } from 'react';
import TablePropTypes from './TablePropTypes';

class TableRow extends React.Component {
  render() {
    const { className, type, accent, children, ...props } = this.props;

    let _className = `cf-table__row cf-table__row--${type}`;

    if (accent) {
      _className += ` cf-table__row--accent-${accent}`;
    }

    if (className && className.trim()) {
      _className += ' ' + className.trim();
    }

    return (
      <tr className={_className} {...props}>
        {children}
      </tr>
    );
  }
}

TableRow.propTypes = {
  className: PropTypes.string,
  type: TablePropTypes.rowType,
  accent: TablePropTypes.rowAccent,
  children: PropTypes.node
};

TableRow.defaultProps = {
  className: '',
  type: 'default',
  accent: false
};

export default TableRow;
