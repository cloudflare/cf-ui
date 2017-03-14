# cf-component-layout

> Cloudflare Layout Component

## Installation

```sh
$ npm install cf-component-layout
```

## Usage

```jsx
import React from 'react';
import { LayoutContainer, LayoutRow, LayoutColumn } from 'cf-component-layout';

const LayoutComponent = () => (
  <LayoutContainer>
    <LayoutRow>
      <LayoutColumn width={1 / 2}><p>Column 1/2</p></LayoutColumn>
      <LayoutColumn width={1 / 2}><p>Column 1/2</p></LayoutColumn>
    </LayoutRow>

    <LayoutRow>
      <LayoutColumn width={1 / 3}><p>Column 1/3</p></LayoutColumn>
      <LayoutColumn width={1 / 3}><p>Column 1/3</p></LayoutColumn>
      <LayoutColumn width={1 / 3}><p>Column 1/3</p></LayoutColumn>
    </LayoutRow>

    <LayoutRow>
      <LayoutColumn width={1 / 4}><p>Column 1/4</p></LayoutColumn>
      <LayoutColumn width={1 / 4}><p>Column 1/4</p></LayoutColumn>
      <LayoutColumn width={1 / 4}><p>Column 1/4</p></LayoutColumn>
      <LayoutColumn width={1 / 4}><p>Column 1/4</p></LayoutColumn>
    </LayoutRow>

    <LayoutRow>
      <LayoutColumn width={1 / 4}><p>Column 1/4</p></LayoutColumn>
      <LayoutColumn width={2 / 4}><p>Column 2/4</p></LayoutColumn>
      <LayoutColumn width={1 / 4}><p>Column 1/4</p></LayoutColumn>
    </LayoutRow>
  </LayoutContainer>
);

export default LayoutComponent;
```
