import React from 'react';
import { Checkbox, CheckboxGroup } from 'cf-component-checkbox';

class CheckboxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox1: true,
      checkbox2: false,
      checkboxValues: ['option1']
    };
    this.onCheckboxGroupChange = this.onCheckboxGroupChange.bind(this);
  }

  onCheckboxGroupChange(values) {
    this.setState({
      checkboxValues: values
    });
  }

  render() {
    return (
      <div>
        <p>You can create them individually with <code>Checkbox</code></p>

        <Checkbox
          label="Checkbox 1"
          name="checkbox-1"
          value="checkbox1"
          checked={this.state.checkbox1}
          onChange={checked => this.setState({ checkbox1: checked })}
        />

        <Checkbox
          label="Checkbox 2"
          name="checkbox-2"
          value="checkbox2"
          checked={this.state.checkbox2}
          onChange={checked => this.setState({ checkbox2: checked })}
        />

        <p>Or as a group with <code>CheckboxGroup</code></p>

        <CheckboxGroup
          values={this.state.checkboxValues}
          onChange={this.onCheckboxGroupChange}
          options={[
            { label: 'Option 1', name: 'group-option-1', value: 'option1' },
            { label: 'Option 2', name: 'group-option-2', value: 'option2' }
          ]}
        />

        <p>
          You can also disable a label by passing <code>false</code> explicitly
        </p>

        <Checkbox
          label={false}
          name="checkbox-1-no-label"
          value="checkbox1"
          checked={this.state.checkbox1}
          onChange={checked => this.setState({ checkbox1: checked })}
        />
      </div>
    );
  }
}

export default CheckboxComponent;
