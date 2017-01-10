// @flow

const React = require('react');
const {PropTypes} = React;

class TableHead extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <thead className="cf-table__head">
        {this.props.children}
      </thead>
    );
  }
}

module.exports = TableHead;
