const React = require('react');
const {render} = require('react-dom');

const Callout = require('../../src/index');

class Component extends React.Component {
  render() {
    return (
      <Callout
        title="Callout Title"
        content="Callout content."/>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-callout--basic')
);
