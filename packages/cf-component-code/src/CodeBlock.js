import React, { PropTypes } from 'react';
import Code from './Code';

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
  children: PropTypes.node
};

export default CodeBlock;
