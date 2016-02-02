# cf-component-dropdown

> CloudFlare Dropdown Component

## Installation

```sh
$ npm install cf-component-dropdown
```

## Usage

```js
const React = require('react');
const {
  Button,
  ButtonGroup
} = require('cf-component-button');
const {
  Dropdown,
  DropdownLink,
  DropdownSeparator
} = require('../../src/index');

class Application extends React.Component {
  state = {
    dropdownOpen: false
  };

  render() {
    return (
      <div>
        <h1>CloudFlare Dropdown Component Example</h1>

        <ButtonGroup>
          <Button type="primary" onClick={() => this.setState({ dropdownOpen: true })}>
            Open Dropdown
          </Button>

          {this.state.dropdownOpen && (
            <Dropdown onClose={() => this.setState({ dropdownOpen: false })}>
              <DropdownLink to="/foo">Link to /foo</DropdownLink>
              <DropdownLink to="/bar">Link to /bar</DropdownLink>
              <DropdownSeparator/>
              <DropdownLink to="/baz">Link to /baz</DropdownLink>
              <DropdownLink to="/bat">Link to /bat</DropdownLink>
            </Dropdown>
          )}
        </ButtonGroup>
      </div>
    );
  }
}
```

You can also optionally pass an `align` prop with either `"left"` or `"right"`.

```html
<Dropdown align="right" ...>
```

`<DropdownLink/>` just wraps
[`cf-component-link`](https://www.npmjs.com/package/cf-component-link) so
you can use either `to` to specify a route or pass an `onClick` handler.

```js
<DropdownLink to="/my-route"/>
<DropdownLink onClick={this.handleClick}/>
```

Note: `to` requires that you setup
[`cf-util-route-handler`](https://www.npmjs.com/package/cf-util-route-handler)
prior to routing.
