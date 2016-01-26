import React from 'react';

export default class ModalActions extends React.Component {
  render() {
    return (
      <div className="cf-modal__actions">
        {this.props.children}
      </div>
    );
  }
}
