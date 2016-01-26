import React from 'react';
import {render} from 'react-dom';

import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter,
  ModalActions
} from '../../src/index';
import {
  GatewayDest,
  GatewayProvider
} from 'react-gateway';
import ReactModal2 from 'react-modal2';
import {Button} from 'cf-component-button';

class ComponentWithModal extends React.Component {
  state = {
    isModalOpen: false
  };

  handleRequestOpen = () => {
    this.setState({ isModalOpen: true });
  };

  handleRequestClose = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleRequestOpen}>Open Modal</Button>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleRequestClose}>
          <ModalHeader>
            <ModalTitle>Hello from Modal</ModalTitle>
            <ModalClose onClick={this.handleRequestClose}/>
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

class Component extends React.Component {
  render() {
    return (
      <GatewayProvider>
        <div>
          <div>
            <ComponentWithModal/>
          </div>
          <GatewayDest name="modal"/>
        </div>
      </GatewayProvider>
    );
  }
}

const root = document.getElementById('cf-component-modal--basic');

ReactModal2.getApplicationElement = () => root;

render(
  <Component/>,
  root
);
