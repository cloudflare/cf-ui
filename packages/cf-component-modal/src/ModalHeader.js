const React = require('react');
const {PropTypes} = React;

class ModalHeader extends React.Component {
  render() {
    return (
      <header className="cf-modal__header">
        {this.props.children}
      </header>
    );
  }
}

ModalHeader.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = ModalHeader;
