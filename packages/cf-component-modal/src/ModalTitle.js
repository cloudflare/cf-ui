import React from 'react';

export default class ModalTitle extends React.Component {
  render() {
    return (
      <h4 className="cf-modal__title">
        {this.props.children}
      </h4>
    );
  }
}
