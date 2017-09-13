import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'cf-component-icon';

class ModalClose extends React.Component {
  render() {
    return (
      <span className="cf-modal__close" onClick={this.props.onClick}>
        <Icon type="remove" label={this.props.label} />
      </span>
    );
  }
}

ModalClose.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

ModalClose.defaultProps = {
  label: false
};

export default ModalClose;
