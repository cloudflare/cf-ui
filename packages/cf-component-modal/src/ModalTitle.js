const React = require('react');

class ModalTitle extends React.Component {
  render() {
    return (
      <h4 className="cf-modal__title">
        {this.props.children}
      </h4>
    );
  }
}

module.exports = ModalTitle;
