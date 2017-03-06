import React, { PropTypes } from 'react';

class TableBody extends React.Component {
  render() {
    let className = 'cf-table__body';
    if (this.props.className.trim())
      className += ' ' + this.props.className.trim();

    return (
      <tbody className={className}>
        {this.props.children}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

TableBody.defaultProps = {
  className: ''
};

export default TableBody;
