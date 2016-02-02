# cf-component-link

> CloudFlare Link Component

## Installation

```sh
$ npm install cf-component-link
```

## Usage

```js
const React = require('react');
const Link = require('../../src/index');

class Application extends React.Component {
  render() {
    return (
      <div>
        <h1>CloudFlare Link Component Example</h1>

        <p>Create a <code>Link</code> with a <code>to</code> prop:</p>
        <Link to="/">Link to /</Link>

        <p>Alternatively you can pass an <code>onClick</code> handler:</p>
        <Link onClick={this.handleClick}>Link to something</Link>
        <p>Note: This will give it a <code>role="button"</code></p>

        <p>All additional props will be added to the <code>Link</code> element:</p>
        <Link to="/foo" className="special-link">Link to /foo</Link>

        <p>You can even specify <code>tagName</code>:</p>
        <Link to="/bar" tagName="button">Link to /bar</Link>

        <p>Or <code>disable</code> the link and it wont do anything when clicked:</p>
        <Link to="/bar" disabled>Link to /bar</Link>
      </div>
    );
  }
}
```

Note: This requires that you setup
[`cf-util-route-handler`](https://www.npmjs.com/package/cf-util-route-handler)
prior to routing.
