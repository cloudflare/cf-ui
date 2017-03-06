# cf-component-tabs

> Cloudflare Tabs Component

## Installation

```sh
$ npm install cf-component-tabs
```

## Usage

```js
const React = require('react');

const {
  Tabs,
  TabsPanel
} = require('../../src/index');

class Application extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 'one'
    };
  }

  handleTabChange(id) {
    this.setState({ active: id });
  }

  render() {
    return (
      <Tabs
        active={this.state.active}
        tabs={[
          { id: 'one', label: 'Tab One' },
          { id: 'two', label: 'Tab Two' }
        ]}
        onChange={this.handleTabChange.bind(this)}>

        <TabsPanel id="one">
          <h1>Tab One</h1>
        </TabsPanel>

        <TabsPanel id="two">
          <h1>Tab Two</h1>
        </TabsPanel>
      </Tabs>
    );
  }
}
```
