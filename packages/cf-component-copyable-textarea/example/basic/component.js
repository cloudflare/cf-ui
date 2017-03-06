import React from 'react';
import { render } from 'react-dom';
import CopyableTextarea from '../../src/index';

class Component extends React.Component {
  render() {
    return (
      <CopyableTextarea
        name="copyable-textarea-example"
        value="Some nice text that needs to be copied"
        clickToCopyText="Click to copy"
        copiedTextToClipboardText="Copied text to clipboard"
        pressCommandOrCtrlCToCopyText="Press Command/Ctrl+C to copy"
      />
    );
  }
}

render(
  <Component />,
  document.getElementById('cf-component-copyable-textarea--basic')
);
