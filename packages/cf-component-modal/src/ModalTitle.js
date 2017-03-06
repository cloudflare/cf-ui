import React, { PropTypes } from 'react';
import { Heading } from 'cf-component-heading';

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
