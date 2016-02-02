const React = require('react');
const {render} = require('react-dom');

const {
  Code,
  CodeBlock
} = require('../../src/index');

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

render(
  <Component/>,
  document.getElementById('cf-component-code--basic')
);
