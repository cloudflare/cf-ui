const React = require('react');
const { PropTypes } = React;

class ModalActions extends React.Component {
  render() {
    return (
      <div className="cf-modal__actions">
        {this.props.children}
      </div>
    );
  }
}

ModalActions.propTypes = {
  children: PropTypes.node
};

module.exports = ModalActions;
