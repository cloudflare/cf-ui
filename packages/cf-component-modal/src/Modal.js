// @flow

const React = require('react');
const {PropTypes} = React;
const ReactModal2 = require('react-modal2').default;
const {Gateway} = require('react-gateway');
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Modal extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'confirm'
    ]),
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    closeOnEsc: PropTypes.bool,
    closeOnBackdropClick: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    closeOnEsc: true,
    closeOnBackdropClick: true
  };

  render() {
    var modalClassName = 'cf-modal';

    if (this.props.type === 'confirm') {
      modalClassName += ' cf-modal--confirm';
    }

    return (
      <Gateway into="modal">
        <ReactCSSTransitionGroup
          transitionName="cf-transition-modal"
          transitionAppear={true}
          transitionAppearTimeout={200}
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}>
          {this.props.isOpen && (
            <div className="cf-modal__backdrop-scroller">
              <div className="cf-modal__backdrop-outer">
                <ReactModal2
                  ref="modal"
                  key="modal"
                  backdropClassName="cf-modal__backdrop"
                  modalClassName={modalClassName}
                  closeOnEsc={this.props.closeOnEsc}
                  closeOnBackdropClick={this.props.closeOnBackdropClick}
                  onClose={this.props.onRequestClose}>
                  {this.props.children}
                </ReactModal2>
              </div>
            </div>
          )}
        </ReactCSSTransitionGroup>
      </Gateway>
    );
  }
}

module.exports = Modal;
