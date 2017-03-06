import React, { PropTypes } from 'react';

class TableCell extends React.Component {
  render() {
    const { className, align, children, ...props } = this.props;

    let _className = 'cf-table__cell';

    if (align) {
      _className += ` cf-table__cell--align-${align}`;
    }

    if (className && className.trim()) {
      _className += ' ' + className.trim();
    }

    return (
      <td className={_className} {...props}>
        {this.props.children}
      </td>
    );
  }
}

TableCell.propTypes = {
  className: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node
};

TableCell.defaultProps = {
  className: ''
};

export default TableCell;
