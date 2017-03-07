import React, { PropTypes } from 'react';
import { default as ReactModal2 } from 'react-modal2';
import { Gateway } from 'react-gateway';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Modal extends React.Component {
  render() {
    var modalClassName = 'cf-modal';

    if (this.props.type === 'confirm') {
      modalClassName += ' cf-modal--confirm';
    }

    if (this.props.width) {
      modalClassName += ` cf-modal--${this.props.width}`;
    }

    return (
      <Gateway into="modal">
        <ReactCSSTransitionGroup
          transitionName="cf-transition-modal"
          transitionAppear={true}
          transitionAppearTimeout={200}
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {this.props.isOpen &&
            <div className="cf-modal__backdrop-scroller">
              <div className="cf-modal__backdrop-outer">
                <ReactModal2
                  key="modal"
                  backdropClassName="cf-modal__backdrop"
                  modalClassName={modalClassName}
                  closeOnEsc={this.props.closeOnEsc}
                  closeOnBackdropClick={this.props.closeOnBackdropClick}
                  onClose={this.props.onRequestClose}
                >
                  {this.props.children}
                </ReactModal2>
              </div>
            </div>}
        </ReactCSSTransitionGroup>
      </Gateway>
    );
  }
}

Modal.propTypes = {
  type: PropTypes.oneOf(['confirm']),
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  closeOnEsc: PropTypes.bool,
  closeOnBackdropClick: PropTypes.bool,
  children: PropTypes.node,
  width: PropTypes.string
};

Modal.defaultProps = {
  closeOnEsc: true,
  closeOnBackdropClick: true
};

export default Modal;
