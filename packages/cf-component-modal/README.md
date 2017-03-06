# cf-component-modal

> Cloudflare Modal Component

## Installation

```sh
$ npm install --save cf-component-modal react-gateway
```

## Usage

```js
const React = require('react');
const {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter,
  ModalActions
} = require('cf-component-modal');
const {
  GatewayDest,
  GatewayProvider
} = require('react-gateway');

class MyComponentWithModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  handleRequestOpen() {
    this.setState({ isModalOpen: true });
  }

  handleRequestClose() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRequestOpen.bind(this)}>Open Modal</button>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleRequestClose.bind(this)}>
          <ModalHeader>
            <ModalTitle>Hello from Modal</ModalTitle>
            <ModalClose onClick={this.handleRequestClose.bind(this)}/>
          </ModalHeader>
          <ModalBody>
            <p>Look at this awesome modal!</p>
          </ModalBody>
          <ModalFooter>
            <ModalActions>
              <button onClick={this.handleRequestClose.bind(this)}>Close Modal</button>
            </ModalActions>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

class Application extends React.Component {
  render() {
    return (
      <GatewayProvider>
        <div className="application">
          <div className="application__content">
            <h1>Cloudflare Modal Component Example</h1>
            <MyComponentWithModal/>
          </div>
          <GatewayDest name="modal"/>
        </div>
      </GatewayProvider>
    );
  }
}
```
