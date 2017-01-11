// @flow

const React = require('react');
const {Heading} = require('cf-component-heading');
const {PropTypes} = React;

class ModalTitle extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

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

module.exports = ModalTitle;
