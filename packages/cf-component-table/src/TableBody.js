// @flow

const React = require('react');
const {PropTypes} = React;

class TableBody extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <tbody className="cf-table__body">
        {this.props.children}
      </tbody>
    );
  }
}

module.exports = TableBody;
