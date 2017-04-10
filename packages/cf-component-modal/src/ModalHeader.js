import React from 'react';

import PropTypes from 'prop-types';

class ModalHeader extends React.Component {
  render() {
    return (
      <header className="cf-modal__header">
        {this.props.children}
      </header>
    );
  }
}

ModalHeader.propTypes = {
  children: PropTypes.node
};

export default ModalHeader;
