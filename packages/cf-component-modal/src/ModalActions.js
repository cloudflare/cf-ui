const React = require('react');

class ModalActions extends React.Component {
  render() {
    return (
      <div className="cf-modal__actions">
        {this.props.children}
      </div>
    );
  }
}

module.exports = ModalActions;
