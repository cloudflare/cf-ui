import React from 'react';
import { Code, CodeBlock } from 'cf-component-code';

class CodeComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Look at this <Code>inline code</Code>!</p>
        <CodeBlock>And this code block!</CodeBlock>
      </div>
    );
  }
}

export default CodeComponent;
