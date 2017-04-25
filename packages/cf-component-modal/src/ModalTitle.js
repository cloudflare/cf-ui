import React, { PropTypes } from 'react';
import { applyTheme } from 'cf-style-container';

class ModalTitle extends React.Component {
  render() {
    return (
      <h1 className="cf-modal__title">
        {this.props.children}
      </h1>
    );
  }
}

ModalTitle.propTypes = {
  children: PropTypes.node
};

export default ModalTitle;
