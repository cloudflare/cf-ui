// @flow

const React = require('react');
const {PropTypes} = React;

class ModalHeader extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <header className="cf-modal__header">
        {this.props.children}
      </header>
    );
  }
}

module.exports = ModalHeader;
