const React = require('react');
const Code = require('./Code');

class CodeBlock extends React.Component {
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
