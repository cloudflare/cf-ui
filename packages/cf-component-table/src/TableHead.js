const React = require('react');

class TableHead extends React.Component {
  render() {
    return (
      <thead className="cf-table__head">
        {this.props.children}
      </thead>
    );
  }
}

module.exports = TableHead;
