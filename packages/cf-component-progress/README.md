# cf-component-progress

> CloudFlare Progress Component

## Installation

```sh
$ npm install cf-component-progress
```

## Usage

```js
const React = require('react');
const Progress = require('../../src/index');

export default class Application extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 'foo'
    };

    this.handleStepChange = this.handleStepChange.bind(this);
  }

  handleStepChange(step) {
    this.setState({
      activeStep: step
    });
  }

  render() {
    return (
      <div>
        <h1>CloudFlare Progress Component Example</h1>

        <Progress
          active={this.state.activeStep}
          onChange={this.handleStepChange}
          steps={[
            { id: 'foo', label: 'Foo', disabled: false },
            { id: 'bar', label: 'Bar', disabled: false },
            { id: 'baz', label: 'Baz', disabled: true  }
          ]}/>
      </div>
    );
  }
}
```
