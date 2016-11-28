const React = require('react');
const {PropTypes} = React;

class ModalBody extends React.Component {
  render() {
    return (
      <div className="cf-modal__body">
        {this.props.children}
      </div>
    );
  }
}

ModalBody.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = ModalBody;
