import React, { PropTypes } from 'react';
import Icon from 'cf-component-icon';

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
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

ModalClose.defaultProps = {
  label: false
};

export default ModalClose;
