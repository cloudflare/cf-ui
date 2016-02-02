# cf-component-textarea

> CloudFlare Textarea Component

## Installation

```sh
$ npm install cf-component-textarea
```

## Usage

```js
const React = require('react');
const Textarea = require('../../src/index');

class Application extends React.Component {
  state = {
    textareaValue: ''
  };

  handleTextareaChange = value => {
    this.setState({
      textareaValue: value
    });
  };

  render() {
    return (
      <Textarea
        name="example"
        value={this.state.textareaValue}
        onChange={this.handleTextareaChange}/>
    );
  }
}
```
