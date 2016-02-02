const React = require('react');

class TableFoot extends React.Component {
  render() {
    return (
      <tfoot className="cf-table__foot">
        {this.props.children}
      </tfoot>
    );
  }
}

module.exports = TableFoot;
