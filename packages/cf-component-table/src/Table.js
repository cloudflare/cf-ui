import React, { PropTypes } from 'react';

class Table extends React.Component {
  render() {
    let className = 'cf-table';

    if (this.props.striped) className += ' cf-table--striped';
    if (this.props.hover) className += ' cf-table--hover';
    if (this.props.bordered) className += ' cf-table--bordered';
    if (this.props.condensed) className += ' cf-table--condensed';
    if (this.props.className.trim())
      className += ' ' + this.props.className.trim();

    return (
      <table className={className}>
        {this.props.children}
      </table>
    );
  }
}

Table.propTypes = {
  className: PropTypes.string,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  bordered: PropTypes.bool,
  condensed: PropTypes.bool,
  children: PropTypes.node
};

Table.defaultProps = {
  className: '',
  striped: false,
  hover: false,
  bordered: true,
  condensed: false
};

export default Table;
