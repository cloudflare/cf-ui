import React from 'react';
import { render } from 'react-dom';
import { Code, CodeBlock } from '../../src/index';

class Component extends React.Component {
  render() {
    return (
      <div>
        <p>Look at this <Code>inline code</Code>!</p>
        <CodeBlock>And this code block!</CodeBlock>
      </div>
    );
  }
}

render(<Component />, document.getElementById('cf-component-code--basic'));
