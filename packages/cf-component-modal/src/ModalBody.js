// @flow

const React = require('react');
const {PropTypes} = React;

class ModalBody extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div className="cf-modal__body">
        {this.props.children}
      </div>
    );
  }
}

module.exports = ModalBody;
