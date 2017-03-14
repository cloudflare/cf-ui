# cf-component-select

> Cloudflare Select Component

Note: This implementation is just enough to get by for now, we'll be adding more
when we need it `react-select` supports everything we need.

## Installation

```sh
$ npm install cf-component-select
```

## Usage

```jsx
import React from 'react';
import Select from 'cf-component-select';

class SelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      multiValue: [1, 3]
    };
  }

  handleChange(value) {
    this.setState({ value });
  }

  handleMultiChange(values) {
    this.setState({
      multiValue: values.map(selected => selected.value)
    });
  }

  render() {
    return (
      <div>
        <Select
          label="Basic"
          value={this.state.value}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two', disabled: true },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleChange.bind(this)}
        />

        <Select
          searchable
          label="Searchable"
          value={this.state.value}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleChange.bind(this)}
        />

        <Select
          searchable
          multi
          label="Searchable Multi"
          value={this.state.multiValue}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleMultiChange.bind(this)}
        />

        <Select
          disabled
          label="Disabled"
          value={this.state.value}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default SelectComponent;
```

You can make `Select` searchable:

```jsx
<Select searchable .../>
```

Or a multi-select:

```jsx
<Select multi .../>
```

Or both!

```jsx
<Select searchable multi .../>
```
