# cf-component-toggle

> CloudFlare Toggle Component

## Installation

```sh
$ npm install cf-component-toggle
```

## Usage

```js
const React = require('react');
const Toggle = require('../../src/index');

class Application extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleValue: false
    };
  }

  handleToggle(value) {
    this.setState({
      toggleValue: value
    });
  };

  render() {
    return <Toggle
      label="Example Toggle"
      name="example"
      value={this.state.toggleValue}
      onChange={this.handleToggle.bind(this)}/>;
  }
}
```

> Note: Designed to work with `redux-form`

If you specifically don't want to use a `label` then you must pass `false`.
