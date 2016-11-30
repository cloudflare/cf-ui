const React = require('react');
const {PropTypes} = React;

class TableHeadCell extends React.Component {
  render() {
    return (
      <th className="cf-table__cell cf-table__cell--head">
        {this.props.children}
      </th>
    );
  }
}

TableHeadCell.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = TableHeadCell;
