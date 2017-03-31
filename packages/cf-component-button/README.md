# cf-component-button

> Cloudflare Button Component

## Installation

```sh
$ npm install cf-component-button
```

## Usage

```jsx
import React from 'react';
import { Button, ButtonGroup } from 'cf-component-button';

const ButtonComponent = () => (
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
);

export default ButtonComponent;
```
