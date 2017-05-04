import React from 'react';
import PropTypes from 'prop-types';
import { applyTheme } from 'cf-style-container';

class ModalTitle extends React.Component {
  render() {
    return (
      <div className="cf-modal__title">
        <h1 className="cf-modal__title">
          {this.props.children}
        </h1>
      </div>
    );
  }
}

ModalTitle.propTypes = {
  children: PropTypes.node
};

export default ModalTitle;
