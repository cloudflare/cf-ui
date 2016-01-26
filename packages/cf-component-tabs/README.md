# cf-component-tabs

> CloudFlare Tabs Component

## Installation

```sh
$ npm install cf-component-tabs
```

## Usage

```js
import React from 'react';

import {
  Tabs,
  TabsPanel
} from '../../src/index';

class Application extends React.Component {
  state = {
    activeTab: 'one'
  };

  handleTabChange(id) {
    this.setState({ activeTab: id });
  }

  render() {
    return (
      <Tabs
        activeTab={this.state.activeTab}
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
