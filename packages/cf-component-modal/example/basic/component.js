import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter,
  ModalActions
} from 'cf-component-modal';
import { GatewayDest, GatewayProvider } from 'react-gateway';
import ReactModal2 from 'react-modal2';
import { Button as ButtonUnstyled, ButtonTheme } from 'cf-component-button';
import { applyTheme } from 'cf-style-container';

const Button = applyTheme(ButtonUnstyled, ButtonTheme);

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      width: null
    };
    this.handleRequestOpen = this.handleRequestOpen.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleRequestOpen() {
    this.setState({ isModalOpen: true });
  }

  handleRequestClose() {
    this.setState({ isModalOpen: false });
  }

  handleWidthToggle() {
    this.setState(oldState => ({
      width: oldState.width === 'wide' ? null : 'wide'
    }));
  }

  render() {
    return (
      <div>
        <Button type="default" onClick={this.handleRequestOpen}>
          Open Modal
        </Button>
        <Modal
          width={this.state.width}
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleRequestClose}
        >
          <ModalHeader>
            <ModalTitle>Hello from Modal</ModalTitle>
            <ModalClose onClick={this.handleRequestClose} />
          </ModalHeader>
          <ModalBody>
            <p>Look at this awesome modal!</p>
          </ModalBody>
          <ModalFooter>
            <ModalActions>
              <button onClick={this.handleWidthToggle.bind(this)}>
                Toggle width
              </button>
              <button onClick={this.handleRequestClose.bind(this)}>
                Close Modal
              </button>
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
        <div>
          {this.props.children}
          <GatewayDest name="modal" />
        </div>
      </GatewayProvider>
    );
  }
}

const root = document.body;
ReactModal2.getApplicationElement = () => root;

const finalComponent = () => (
  <Application>
    <ModalComponent />
  </Application>
);

export default finalComponent;
