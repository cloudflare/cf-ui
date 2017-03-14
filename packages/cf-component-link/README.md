# cf-component-link

> Cloudflare Link Component

## Installation

```sh
$ npm install cf-component-link
```

## Usage

```jsx
import React from 'react';
import Link from 'cf-component-link';

class LinkComponent extends React.Component {
  handleClick() {
    console.log('handleClick!');
  }

  render() {
    return (
      <div>
        <p>Create a <code>Link</code> with a <code>to</code> prop:</p>
        <Link to="/">Link to /</Link>

        <p>Alternatively you can pass an <code>onClick</code> handler:</p>
        <Link onClick={this.handleClick.bind(this)}>Link to something</Link>
        <p>Note: This will give it a <code>role="button"</code></p>

        <p>
          All additional props will be added to the <code>Link</code> element:
        </p>
        <Link to="/foo" className="special-link">Link to /foo</Link>

        <p>You can even specify <code>tagName</code>:</p>
        <Link to="/bar" tagName="button">Link to /bar</Link>
      </div>
    );
  }
}

export default LinkComponent;
```

Note: This requires that you setup
[`cf-util-route-handler`](https://www.npmjs.com/package/cf-util-route-handler)
prior to routing.
