# cf-component-copyable-textarea

> Cloudflare Copyable Textarea Component

## Installation

```sh
$ npm install cf-component-copyable-textarea
```

## Usage

```js
const React = require('react');
const CopyableTextarea = require('cf-component-copyable-textarea');

export default class Application extends React.Component {
  render() {
    return (
      <CopyableTextarea
        value="Text to copy"
        clickToCopyText="Click to copy"
        copiedTextToClipboardText="Copied text to clipboard"
        pressCommandOrCtrlCToCopyText="Press Command/Ctrl+C to copy"/>
    );
  }
}
```
