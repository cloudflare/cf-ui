# cf-component-input

> Cloudflare Input Component

## Installation

```sh
$ npm install cf-component-input
```

## Usage

```js
const React = require('react');
const Input = require('../../src/index');

class Application extends React.Component {
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
        <h1>Cloudflare Input Component Example</h1>

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
