# cf-component-loading

> CloudFlare Loading Component

## Installation

```sh
$ npm install cf-component-loading
```

## Usage

```js
const React = require('react');
const Loading = require('cf-component-loading');

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.isLoading ? <Loading/> : (
          <p>Done Loading.</p>
        )}
      </div>
    );
  }
}
```
