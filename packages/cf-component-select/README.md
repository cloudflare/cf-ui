# cf-component-select

> CloudFlare Select Component

Note: This implementation is just enough to get by for now, we'll be adding more
when we need it `react-select` supports everything we need.

## Installation

```sh
$ npm install cf-component-select
```

## Usage

```js
import React from 'react';
import Select from 'cf-component-select';

export default class MyComponent extends React.Component {
  state = {
    value: 1
  };

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <Select
          label="Basic"
          value={this.state.value}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
```

You can also make `Select` searchable:

```js
<Select searchable .../>
```

Or a multi-select:

```js
<Select multi .../>
```

Or both!

```js
<Select searchable multi .../>
```
