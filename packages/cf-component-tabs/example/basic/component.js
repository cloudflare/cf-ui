import React from 'react';
import {render} from 'react-dom';

import {
  Tabs,
  TabsPanel
} from '../../src/index';

class Component extends React.Component {
  state = {
    activeTab: 'one'
  };

  handleTabChange = id => {
    this.setState({ activeTab: id });
  };

  render() {
    return (
      <Tabs
        activeTab={this.state.activeTab}
        tabs={[
          { id: 'one',   label: 'Tab One'   },
          { id: 'two',   label: 'Tab Two'   },
          { id: 'three', label: 'Tab Three' }
        ]}
        onChange={this.handleTabChange}>

        <TabsPanel id="one">
          <h1>Tab One</h1>
        </TabsPanel>

        <TabsPanel id="two">
          <h1>Tab Two</h1>
        </TabsPanel>

        <TabsPanel id="three">
          <h1>Tab Three</h1>
        </TabsPanel>
      </Tabs>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-tabs--basic')
);
