# cf-component-code

> CloudFlare Code Component

## Installation

```sh
$ npm install cf-component-code
```

## Usage

```js
import React from 'react';
import {Code, CodeBlock} from 'cf-component-code';

export default class Application extends React.Component {
  render() {
    return (
      <div>
        <Code>Hello World</Code>
        <CodeBlock>Hello World</CodeBlock>
      </div>
    );
  }
}
```
