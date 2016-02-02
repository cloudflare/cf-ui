# cf-component-icon

> CloudFlare Icon Component

## Installation

```sh
$ npm install cf-component-icon
```

## Usage

```js
const React = require('react');
const Icon = require('cf-component-icon');

class Application extends React.Component {
  render() {
    return (
      <div>
        <Icon label="info-sign" size="xlarge" label="Info"/>
        This is how you use an <code>Icon</code>!
      </div>
    );
  }
}
```

Other options:

```js
<Icon border spin muted white/>
```

If you specifically don't want to use a `label` then you must pass `false`.
