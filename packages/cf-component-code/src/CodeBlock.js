import React from 'react';
import PropTypes from 'prop-types';
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
