const React = require('react');
const {Heading} = require('cf-component-heading');
const {PropTypes} = React;

class ModalTitle extends React.Component {
  render() {
    return (
      <div className="cf-modal__title">
        <Heading size={3}>
          {this.props.children}
        </Heading>
      </div>
    );
  }
}

ModalTitle.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = ModalTitle;
