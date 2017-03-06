import React from 'react';
import { Tabs, TabsPanel } from 'cf-component-tabs';

class TabsComponent extends React.Component {
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
          { id: 'two', label: 'Tab Two' },
          { id: 'three', label: 'Tab Three' }
        ]}
        onChange={this.handleTabChange.bind(this)}
      >

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

export default TabsComponent;
