# cf-component-box

> Cloudflare Box Component

This is styling component similar to cf-component-flex which allows for arbitrary styling.

This component should only be used when the built in style doesn't quite fit the bill and when
it can't be done with fela. Ideally, cf-ui components should have the right styling built in for
most cases. In the few edge cases that pop up in real world feature development, this is an alternative
to wrapping your component in a `<div>` or `<span>` and styling it with css to accommodate one-offs.

Also, note that using Box effectively performs a component level CSS reset, as all props
not provided will be pulled from the default theme. These defaults, outlined in propertiesSpec,
either match the browser defaults, or are taken from our global styles as defined by
cf-style-const.

## Installation

```sh
$ npm install cf-component-box
```

## Usage

```jsx
import React from 'react';
import { Box } from 'cf-component-box';

const SomeComponent = () => (
  <Box margin="1rem" padding="1rem">
    <Heading size={3}>Things</Heading>
    <Text>Lorem ipsum</Text>
  </Box>
);

export default SomeComponent;
```
