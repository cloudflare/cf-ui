const React = require('react');

class ModalBody extends React.Component {
  render() {
    return (
      <div className="cf-modal__body">
        {this.props.children}
      </div>
    );
  }
}

module.exports = ModalBody;
