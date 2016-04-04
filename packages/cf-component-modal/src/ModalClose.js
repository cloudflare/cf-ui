const React = require('react');
const {PropTypes} = React;
const Icon = require('cf-component-icon');

class ModalClose extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ])
  };

  static defaultProps = {
    label: false
  };

  render() {
    return (
      <span className="cf-modal__close" onClick={this.props.onClick}>
        <Icon type="close" label={this.props.label} size="2x"/>
      </span>
    );
  }
}

module.exports = ModalClose;
