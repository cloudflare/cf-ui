import React from 'react';
import {
  Checkbox,
  CheckboxUnstyled,
  CheckboxTheme,
  CheckboxGroup
} from 'cf-component-checkbox';
import { applyTheme } from 'cf-style-container';

const CheckboxGroupItem = applyTheme(
  CheckboxUnstyled,
  CheckboxTheme,
  theme => ({
    marginTop: '1em',

    '&:first-child': {
      marginTop: 0
    }
  })
);

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
        <p>
          You can create them individually with <code>Checkbox</code>
        </p>

        <Checkbox
          label="Checkbox 1"
          name="checkbox-1"
          value="checkbox1"
          checked={this.state.checkbox1}
          onChange={event => this.setState({ checkbox1: event.target.checked })}
        />

        <Checkbox
          label="Checkbox 2"
          name="checkbox-2"
          value="checkbox2"
          checked={this.state.checkbox2}
          onChange={event => this.setState({ checkbox2: event.target.checked })}
        />

        <p>
          Or as a group with <code>CheckboxGroup</code>
        </p>

        <CheckboxGroup
          values={this.state.checkboxValues}
          onChange={this.onCheckboxGroupChange}
        >
          <CheckboxGroupItem
            label="Option 1"
            name="group-option-1"
            value="option1"
          />
          <CheckboxGroupItem
            label="Option 2"
            name="group-option-2"
            value="option2"
          />
        </CheckboxGroup>

        <p>
          You can also disable a label by passing <code>false</code> explicitly
        </p>

        <Checkbox
          label={false}
          name="checkbox-1-no-label"
          value="checkbox1"
          checked={this.state.checkbox1}
          onChange={event => this.setState({ checkbox1: event.target.checked })}
        />
      </div>
    );
  }
}

export default CheckboxComponent;
