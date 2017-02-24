const React = require('react');
const { render } = require('react-dom');

const Text = require('../../src/index');

class Component extends React.Component {
  render() {
    return (
      <div>
        <p>Specify a <code>size</code></p>
        <Text size="normal">Hello World</Text>
        <Text size="small">Hello World</Text>

        <p>and/or an <code>align</code></p>
        <Text align="start">Hello World</Text>
        <Text align="center">Hello World</Text>
        <Text align="justify">Hello World</Text>
        <Text align="end">Hello World</Text>

        <p>and/or a <code>type</code></p>
        <Text type="info">Hello World</Text>
        <Text type="success">Hello World</Text>
        <Text type="warning">Hello World</Text>
        <Text type="error">Hello World</Text>
        <Text type="muted">Hello World</Text>

        <p>and/or a <code>case</code></p>
        <Text case="capitalize">hello world</Text>
        <Text case="titlecase">hello world</Text>
        <Text case="lowercase">Hello World</Text>
        <Text case="uppercase">Hello World</Text>
      </div>
    );
  }
}

render(<Component />, document.getElementById('cf-component-text--basic'));
