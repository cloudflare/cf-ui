# cf-component-typography

> CloudFlare Typography Component

## Installation

```sh
$ npm install cf-component-typography
```

## Usage

```js
import React from 'react';
import {
  Abbr,
  Cite,
  Del,
  Em,
  Ins,
  Kbd,
  Mark,
  Samp,
  Small,
  Strike,
  Strong,
  Sub,
  Sup,
  Underline,
  Var
} from '../../src/index';

class Application extends React.Component {
  render() {
    return (
      <div>
        <h1>CloudFlare Typography Component Example</h1>

        <Abbr title="Abbreviation">Abbr</Abbr>
        <Cite>Cite</Cite>
        <Del>Del</Del>
        <Em>Em</Em>
        <Ins>Ins</Ins>
        <Kbd>Kbd</Kbd>
        <Mark>Mark</Mark>
        <Samp>Samp</Samp>
        <Small>Small</Small>
        <Strike>Strike</Strike>
        <Strong>Strong</Strong>
        <Sub>Sub</Sub>
        <Sup>Sup</Sup>
        <Underline>Underline</Underline>
        <Var>Var</Var>
      </div>
    );
  }
}
```
