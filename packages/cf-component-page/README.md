# cf-component-page

> CloudFlare Page Component

## Installation

```sh
$ npm install cf-component-page
```

## Usage

```js
import React from 'react';
import {
  Page,
  PageHeader
} from 'cf-component-page';

export default class MyComponent extends React.Component {
  render() {
    return (
      <Page>
        <PageHeader title="Title" subtitle="Subtitle"/>
        ...
      </Page>
    );
  }
}
```
