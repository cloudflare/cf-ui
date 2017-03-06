# cf-component-label

> Cloudflare Label Component

## Installation

```sh
$ npm install cf-component-label
```

## Usage

```js
const React = require('react');
const Label = require('cf-component-label');

class Application extends React.Component {
  render() {
    return (
      <div>
        <Label type="default">Default Label</Label>
        <Label type="info">Info Label</Label>
        <Label type="success">Success Label</Label>
        <Label type="warning">Warning Label</Label>
        <Label type="error">Error Label</Label>

        <h3>
          You can also customize the <code>tagName</code>

          <Label type="info" tagName="small">
            Label
          </Label>
        </h3>
      </div>
    );
  }
}
```
