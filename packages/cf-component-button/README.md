# cf-component-button

> CloudFlare Button Component

## Installation

```sh
$ npm install cf-component-button
```

## Usage

```js
import React from 'react';
import {
  ButtonGroup,
  Button
} from 'cf-component-button';

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
