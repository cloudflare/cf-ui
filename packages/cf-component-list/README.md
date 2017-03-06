# cf-component-list

> Cloudflare List Component

## Installation

```sh
$ npm install cf-component-list
```

## Usage

```js
const React = require('react');
const {List, ListItem} = require('cf-component-list');

export default class Application extends React.Component {
  render() {
    return (
      <div>
        <h1>Cloudflare List Component Example</h1>

        <p>Basic usage:</p>
        <List>
          <ListItem>One</ListItem>
          <ListItem>Two</ListItem>
        </List>

        <p>Ordered list:</p>
        <List ordered>
          <ListItem>One</ListItem>
          <ListItem>Two</ListItem>
        </List>

        <p>Unstyled list:</p>
        <List unstyled>
          <ListItem>One</ListItem>
          <ListItem>Two</ListItem>
        </List>
      </div>
    );
  }
}
```
