# cf-component-viewport

> CloudFlare Viewport Component

## Installation

```sh
$ npm install cf-component-viewport
```

## Usage

```js
import React from 'react';
import Viewport from 'cf-component-viewport';

export default class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <Viewport size="mobileWide">
          <div>...</div>
        </Viewport>
        <Viewport not size="mobileWide">
          <div>...</div>
        </Viewport>
      </div>
    );
  }
}
```
