# cf-component-button

> Cloudflare Button Component

## Installation

```sh
$ npm install cf-component-button
```

## Usage

```js
import React from 'react';
import { applyTheme, ThemeProvider } from 'cf-style-container';
import { variables } from 'cf-style-const';
import {
  ButtonGroup as ButtonGroupUnstyled,
  Button as ButtonUnstyled,
  ButtonTheme,
  ButtonGroupTheme
} from 'cf-component-button';

const Button = applyTheme(ButtonUnstyled, ButtonTheme);
const ButtonGroup = applyTheme(ButtonGroupUnstyled, ButtonGroupTheme);

export default () => (
  <ThemeProvider theme={variables}>
    <div>
      <ButtonGroup>
        <Button type="primary" onClick={() => console.log('Clicked One!')}>
          Button One
        </Button>
        <Button type="default" onClick={() => console.log('Clicked Two!')}>
          Button Two
        </Button>
        <Button type="success" onClick={() => console.log('Clicked Three!')}>
          Button Three
        </Button>
      </ButtonGroup>
      <p>
        <Button type="primary" onClick={() => console.log('Clicked Single!')}>
          Single Button
        </Button>
      </p>
    </div>
  </ThemeProvider>
);
```
