import React, { PropTypes } from 'react';

class ModalBody extends React.Component {
  render() {
    return (
      <div className="cf-modal__body">
        {this.props.children}
      </div>
    );
  }
}

ModalBody.propTypes = {
  children: PropTypes.node
};

export default ModalBody;
