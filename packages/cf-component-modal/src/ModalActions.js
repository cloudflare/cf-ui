import React from 'react';

import PropTypes from 'prop-types';

class ModalActions extends React.Component {
  render() {
    return (
      <div className="cf-modal__actions">
        {this.props.children}
      </div>
    );
  }
}

ModalActions.propTypes = {
  children: PropTypes.node
};

export default ModalActions;
