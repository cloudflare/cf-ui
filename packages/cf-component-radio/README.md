# cf-component-radio

> Cloudflare Radio Component

## Installation

```sh
$ npm install cf-component-radio
```

## Usage

```jsx
import React from 'react';
import { Radio, RadioGroup } from '../../src/index';

class RadioComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: 'option1'
    };
    this.onRadioChange = this.onRadioChange.bind(this);
  }

  onRadioChange(val) {
    this.setState({
      radioValue: val
    });
  }

  render() {
    return (
      <div>
        <p>You can create them individually with <code>Radio</code></p>

        <Radio
          label="Option 1"
          name="radio-option-1"
          value="option1"
          checked={this.state.radioValue === 'option1'}
          onChange={this.onRadioChange}
        />

        <Radio
          label="Option 2"
          name="radio-option-2"
          value="option2"
          checked={this.state.radioValue === 'option2'}
          onChange={this.onRadioChange}
        />

        <p>Or as a group with <code>RadioGroup</code></p>

        <RadioGroup
          value={this.state.radioValue}
          onChange={this.onRadioChange}
          options={[
            { label: 'Option 1', name: 'group-option-1', value: 'option1' },
            { label: 'Option 2', name: 'group-option-2', value: 'option2' }
          ]}
        />

        <p>
          You can also disable a label by passing <code>false</code> explicitly
        </p>

        <Radio
          label={false}
          name="radio-option-1-no-label"
          value="option1"
          checked={this.state.radioValue === 'option1'}
          onChange={this.onRadioChange}
        />
      </div>
    );
  }
}

export default RadioComponent;
```
