# cf-component-toggle

> CloudFlare Toggle Component

## Installation

```sh
$ npm install cf-component-toggle
```

## Usage

```js
import React from 'react';
import Toggle from '../../src/index';

class Application extends React.Component {
  state = {
    toggleValue: false
  };

  handleToggle = value => {
    this.setState({
      toggleValue: value
    });
  };

  render() {
    return <Toggle
      label="Example Toggle"
      name="example"
      value={this.state.toggleValue}
      onChange={this.handleToggle}/>;
  }
}
```

> Note: Designed to work with `redux-form`

If you specifically don't want to use a `label` then you must pass `false`.
