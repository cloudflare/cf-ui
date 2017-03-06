import React, { PropTypes } from 'react';

class TableHeadCell extends React.Component {
  render() {
    const { className, ...props } = this.props;

    let _className = 'cf-table__cell cf-table__cell--head';

    if (className && className.trim()) {
      _className += ' ' + className.trim();
    }

    return (
      <th className={_className} {...props}>
        {this.props.children}
      </th>
    );
  }
}

TableHeadCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

TableHeadCell.defaultProps = {
  className: ''
};

export default TableHeadCell;
