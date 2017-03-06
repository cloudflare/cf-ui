import React, { PropTypes } from 'react';

class TableHead extends React.Component {
  render() {
    let className = 'cf-table__head';
    if (this.props.className.trim())
      className += ' ' + this.props.className.trim();

    return (
      <thead className={className}>
        {this.props.children}
      </thead>
    );
  }
}

TableHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

TableHead.defaultProps = {
  className: ''
};

export default TableHead;
