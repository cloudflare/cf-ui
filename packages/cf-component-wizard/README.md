# cf-component-wizard

> CloudFlare Wizard Component

## Installation

```sh
$ npm install cf-component-wizard
```

## Usage

```js
const React = require('react');
const {render} = require('react-dom');
const Wizard = require('../../src/index');
const {Button} = require('cf-component-button');

const {
  GatewayDest,
  GatewayProvider
} = require('react-gateway');

class Component extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeStep: 'step1',
      isOpen: false
    };

    this.handleRequestOpen = this.handleRequestOpen.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleRequestOpen() {
    this.setState({ isOpen: true });
  }

  handleRequestClose() {
    this.setState({ isOpen: false });
  }

  handleStepChange(step) {
    this.setState({
      activeStep: step.id
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleRequestOpen}>Open Wizard</Button>
        <Wizard
          activeStep={this.state.activeStep}
          onStepChange={this.handleStepChange.bind(this)}
          onClose={this.handleRequestClose}
          isOpen={this.state.isOpen}
          title="Create a thing"
          steps={[
            {
              id: 'step1',
              label: 'Step 1',
              content: (<div>Step 1</div>),
              disabled: true
            },
            {
              id: 'step2',
              label: 'Step 2',
              content: (<div>Step 2</div>),
              disabled: false
            },
            {
              id: 'step3',
              label: 'Step 3',
              content: (<div>Step 3</div>),
              disabled: false
            }
          ]} />
      </div>
    );
  }
}

class Application extends React.Component {
  render() {
    return (
      <GatewayProvider>
        <div>
          {this.props.children}
          <GatewayDest name="modal"/>
        </div>
      </GatewayProvider>
    );
  }
}
```
