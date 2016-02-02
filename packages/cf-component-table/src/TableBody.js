const React = require('react');

class TableBody extends React.Component {
  render() {
    return (
      <tbody className="cf-table__body">
        {this.props.children}
      </tbody>
    );
  }
}

module.exports = TableBody;
