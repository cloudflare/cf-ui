import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'cf-component-heading';
import { applyTheme } from 'cf-style-container';

class ModalTitle extends React.Component {
  render() {
    return (
      <div className="cf-modal__title">
        <Heading size={3}>
          {this.props.children}
        </Heading>
      </div>
    );
  }
}

ModalTitle.propTypes = {
  children: PropTypes.node
};

export default ModalTitle;
