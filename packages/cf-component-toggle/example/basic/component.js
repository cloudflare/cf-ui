import React from 'react';
import Toggle from 'cf-component-toggle';

class ToggleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleValue: false
    };
  }

  handleToggle(value) {
    this.setState({
      toggleValue: value
    });
  }

  render() {
    return (
      <div>
        <p>Example Toggle</p>
        <Toggle
          label="Example Toggle"
          name="example"
          value={this.state.toggleValue}
          onChange={this.handleToggle.bind(this)}
        />
        <p>Disabled</p>
        <Toggle
          disabled
          label="Disabled Toggle"
          name="example-disabled"
          value={this.state.toggleValue}
          onChange={this.handleToggle.bind(this)}
        />
      </div>
    );
  }
}

export default ToggleComponent;
