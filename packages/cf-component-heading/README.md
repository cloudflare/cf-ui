# cf-component-heading

> Cloudflare Heading Component

## Installation

```sh
$ npm install cf-component-heading
```

## Usage

```jsx
import React from 'react';
import { Heading, HeadingCaption } from 'cf-component-heading';

const HeadingComponent = () => (
  <Heading size={2}>
    Look at this nice heading!
    <HeadingCaption>It even has a nice HeadingCaption</HeadingCaption>
  </Heading>
);

export default HeadingComponent;
```
