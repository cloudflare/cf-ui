// @flow

const React = require('react');
const {PropTypes} = React;

class ModalActions extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div className="cf-modal__actions">
        {this.props.children}
      </div>
    );
  }
}

module.exports = ModalActions;
