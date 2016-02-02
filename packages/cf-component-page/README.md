# cf-component-page

> CloudFlare Page Component

## Installation

```sh
$ npm install cf-component-page
```

## Usage

```js
const React = require('react');
const {
  Page,
  PageHeader
} = require('cf-component-page');

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
