const React = require('react');

class ModalHeader extends React.Component {
  render() {
    return (
      <header className="cf-modal__header">
        {this.props.children}
      </header>
    );
  }
}

module.exports = ModalHeader;
