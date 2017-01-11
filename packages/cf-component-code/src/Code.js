// @flow

const React = require('react');
const {PropTypes} = React;

class Code extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <code className="cf-code">
        {this.props.children}
      </code>
    );
  }
}

module.exports = Code;
