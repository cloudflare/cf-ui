# cf-component-collapsable-panel

> CloudFlare Collapsable Panel Component

## Installation

```sh
$ npm install cf-component-collapsable-panel
```

## Usage

```js
const React = require('react');
const CollapsablePanel = require('cf-component-collapsable-panel');

export default class Application extends React.Component {
  render() {
    return (
      <CollapsablePanel
        description="(Click to expand into bigger thing)"
        linkText="Click for more" >
        <p>Hello World</p>
      </CollapsablePanel>
    );
  }
}
```
