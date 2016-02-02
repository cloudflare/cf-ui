# cf-component-button

> CloudFlare Button Component

## Installation

```sh
$ npm install cf-component-button
```

## Usage

```js
const React = require('react');
const {
  ButtonGroup,
  Button
} = require('cf-component-button');

export default class Application extends React.Component {
  handleButtonOneClick = () => {
    // clicked...
  };

  handleButtonTwoClick = () => {
    // clicked...
  };

  render() {
    return (
      <div>
        <ButtonGroup>
          <Button type="primary" onClick={this.handleButtonOneClick}>
            Button One
          </Button>
          <Button type="primary" onClick={this.handleButtonTwoClick}>
            Button Two
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}
```
