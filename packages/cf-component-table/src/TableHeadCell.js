const React = require('react');
const {PropTypes} = React;

class TableHeadCell extends React.Component {
  render() {
    let className = 'cf-table__cell cf-table__cell--head';
    if (this.props.className.trim()) className += ' ' + this.props.className.trim();

    return (
      <th className={className}>
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

module.exports = TableHeadCell;
