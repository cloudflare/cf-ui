const React = require('react');
const {PropTypes} = React;

class ModalClose extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  render() {
    return (
      <span className="cf-modal__close" onClick={this.props.onClick}/>
    );
  }
}

module.exports = ModalClose;
