# cf-component-input

> Cloudflare Input Component

## Installation

```sh
$ npm install cf-component-input
```

## Usage

```jsx
import React from 'react';
import Input from 'cf-component-input';

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'Hello World'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      inputValue: value
    });
  }

  render() {
    return (
      <div>
        <Input
          name="example"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />

        <Input
          type="search"
          name="example"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default InputComponent;
```
