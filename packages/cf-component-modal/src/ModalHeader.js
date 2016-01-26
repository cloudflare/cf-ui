import React from 'react';

export default class ModalHeader extends React.Component {
  render() {
    return (
      <header className="cf-modal__header">
        {this.props.children}
      </header>
    );
  }
}
