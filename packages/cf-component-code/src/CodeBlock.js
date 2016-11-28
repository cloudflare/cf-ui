const React = require('react');
const {PropTypes} = React;
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

CodeBlock.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = CodeBlock;
