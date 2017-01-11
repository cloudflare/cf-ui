const React = require('react');
const {render} = require('react-dom');

const CopyableTextarea = require('../../src/index');

class Component extends React.Component {
  render() {
    return (
      <CopyableTextarea
        name="copyable-textarea-example"
        value="Some nice text that needs to be copied"
        clickToCopyText="Click to copy"
        copiedTextToClipboardText="Copied text to clipboard"
        pressCommandOrCtrlCToCopyText="Press Command/Ctrl+C to copy"/>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-copyable-textarea--basic')
);
