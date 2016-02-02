# cf-component-input

> CloudFlare Input Component

## Installation

```sh
$ npm install cf-component-input
```

## Usage

```js
const React = require('react');
const Input = require('../../src/index');

class Application extends React.Component {
  state = {
    inputValue: 'Hello World'
  };

  handleChange = value => {
    this.setState({
      inputValue: value
    });
  };

  render() {
    return (
      <div>
        <h1>CloudFlare Input Component Example</h1>

        <Input
          name="example"
          value={this.state.inputValue}
          onChange={this.handleChange}/>

        <Input
          type="search"
          name="example"
          value={this.state.inputValue}
          onChange={this.handleChange}/>
      </div>
    );
  }
}
```
