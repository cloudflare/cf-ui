// @flow

const React = require('react');
const {PropTypes} = React;

class TableFoot extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <tfoot className="cf-table__foot">
        {this.props.children}
      </tfoot>
    );
  }
}

module.exports = TableFoot;
