# cf-component-callout

> CloudFlare Callout Component

## Installation

```sh
$ npm install cf-component-callout
```

## Usage

```js
const React = require('react');
const Callout = require('cf-component-callout');

export default class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h3>Basic Usage:</h3>
        <Callout title="Title" content="Subtitle"/>

        <h3>Basic Usage with "type":</h3>
        <Callout type="info" title="Title" content="Subtitle"/>
      </div>
    );
  }
}
```
