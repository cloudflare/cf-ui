const React = require('react');

class TableHeadCell extends React.Component {
  render() {
    return (
      <th className="cf-table__cell cf-table__cell--head">
        {this.props.children}
      </th>
    );
  }
}

module.exports = TableHeadCell;
