# cf-component-radio

> CloudFlare Radio Component

## Installation

```sh
$ npm install cf-component-radio
```

## Usage

```js
import React from 'react';

import {
  Radio,
  RadioGroup
} from '../../src/index';

class Application extends React.Component {
  state = {
    radioValue: "option1"
  };

  onRadioChange = val => {
    this.setState({
      radioValue: val
    });
  };

  render() {
    return (
      <div>
        <h1>CloudFlare Radio Component Example</h1>

        <p>You can create them individually with <code>Radio</code></p>

        <Radio
          label="Option 1"
          name="radio-option-1"
          value="option1"
          checked={this.state.radioValue === "option1"}
          onChange={this.onRadioChange}/>

        <Radio
          label="Option 2"
          name="radio-option-2"
          value="option2"
          checked={this.state.radioValue === "option2"}
          onChange={this.onRadioChange}/>

        <p>Or as a group with <code>RadioGroup</code></p>

        <RadioGroup
          value={this.state.radioValue}
          onChange={this.onRadioChange}
          options={[
            { label: 'Option 1', name: 'group-option-1', value: 'option1' },
            { label: 'Option 2', name: 'group-option-2', value: 'option2' }
          ]}/>

        <p>You can also disable a label by passing <code>false</code> explicitly</p>

        <Radio
          label={false}
          name="radio-option-1-no-label"
          value="option1"
          checked={this.state.radioValue === "option1"}
          onChange={this.onRadioChange}/>
      </div>
    );
  }
}
```
