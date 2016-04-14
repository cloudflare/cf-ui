const React = require('react');
const {Heading} = require('cf-component-heading');

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

module.exports = ModalTitle;
