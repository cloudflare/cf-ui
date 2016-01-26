import React from 'react';
import Code from './Code';

export default class CodeBlock extends React.Component {
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
