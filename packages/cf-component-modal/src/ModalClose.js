import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../cf-component-icon/src/';

class ModalClose extends React.Component {
  render() {
    return (
      <span className="cf-modal__close" onClick={this.props.onClick}>
        <Icon type="close" label={this.props.label} size="2x" />
      </span>
    );
  }
}

ModalClose.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string
};

export default ModalClose;
