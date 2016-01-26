import React from 'react';

export default class ModalBody extends React.Component {
  render() {
    return (
      <div className="cf-modal__body">
        {this.props.children}
      </div>
    );
  }
}
