const React = require('react');
const {render} = require('react-dom');

const CopyableTextarea = require('../../src/index');
const {setText} = require('cf-util-text');

setText('Click to copy', 'Click to copy');
setText('Copied text to clipboard', 'Copied text to clipboard');
setText('Press Command/Ctrl+C to copy', 'Press Command/Ctrl+C to copy');

class Component extends React.Component {
  render() {
    return (
      <CopyableTextarea
        name="copyable-textarea-example"
        value="Some nice text that needs to be copied"/>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-copyable-textarea--basic')
);
