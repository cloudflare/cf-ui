const React = require('react');
const {render} = require('react-dom');

const Label = require('../../src/index');

class Component extends React.Component {
  render() {
    return (
      <p>
        <Label type="default">Default</Label>
        <Label type="info">Info</Label>
        <Label type="success">Success</Label>
        <Label type="warning">Warning</Label>
        <Label type="error">Error</Label>
      </p>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-label--basic')
);
