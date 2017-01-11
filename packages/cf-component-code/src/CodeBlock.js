// @flow

const React = require('react');
const {PropTypes} = React;
const Code = require('./Code');

class CodeBlock extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <pre className="cf-code__block">
        <Code>
          {this.props.children}
        </Code>
      </pre>
    );
  }
}

module.exports = CodeBlock;
