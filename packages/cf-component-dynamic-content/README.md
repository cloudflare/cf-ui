# cf-component-dynamic-content

> Cloudflare Dynamic Content Component

## Installation

```sh
$ npm install cf-component-dynamic-content
```

## Usage

```js
const React = require('react');
const DynamicContent = require('../../src/index');

export default class Application extends React.Component {
  render() {
    return (
      <div>
        <h1>Cloudflare Dynamic Content Component Example</h1>

        <DynamicContent dangerouslySetInnerHTML={{
          __html: '<p>Not an XSS attack, I swear.</p>'
        }}/>
      </div>
    );
  }
}
```
