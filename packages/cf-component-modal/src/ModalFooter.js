import React, { PropTypes } from 'react';

class ModalFooter extends React.Component {
  render() {
    let className = 'cf-modal__footer';

    if (this.props.simple) {
      className += ' cf-modal__footer--simple';
    }

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

ModalFooter.propTypes = {
  simple: PropTypes.bool,
  children: PropTypes.node
};

ModalFooter.defaultProps = {
  simple: false
};

export default ModalFooter;
