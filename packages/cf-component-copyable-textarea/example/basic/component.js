import React from 'react';
import CopyableTextarea from 'cf-component-copyable-textarea';

class CopyableTextareaComponent extends React.Component {
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

export default CopyableTextareaComponent;
