# cf-component-textarea

> Cloudflare Textarea Component

## Installation

```sh
$ npm install cf-component-textarea
```

## Usage

```jsx
import React from 'react';
import Textarea from 'cf-component-textarea';

class TextareaComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaValue: ''
    };
  }

  handleTextareaChange(e) {
    this.setState({
      textareaValue: e.target.value
    });
  }

  render() {
    return (
      <Textarea
        name="example"
        value={this.state.textareaValue}
        onChange={this.handleTextareaChange.bind(this)}
      />
    );
  }
}

export default TextareaComponent;
```
