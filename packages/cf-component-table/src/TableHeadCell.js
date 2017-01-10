// @flow

const React = require('react');
const {PropTypes} = React;

class TableHeadCell extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <th className="cf-table__cell cf-table__cell--head">
        {this.props.children}
      </th>
    );
  }
}

module.exports = TableHeadCell;
