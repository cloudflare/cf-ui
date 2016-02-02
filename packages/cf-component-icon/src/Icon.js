const React = require('react');
const {PropTypes} = React;
const {TYPES, SIZES} = require('./options');

class Icon extends React.Component {
  static propTypes = {
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([false])
    ]).isRequired,
    type: PropTypes.oneOf(TYPES).isRequired,
    size: PropTypes.oneOf(SIZES),
    border: PropTypes.bool,
    spin: PropTypes.bool,
    muted: PropTypes.bool,
    white: PropTypes.bool
  };

  render() {
    let className = `cf-icon cf-icon--${this.props.type}`;

    if (this.props.size) {
      className += ` cf-icon--${this.props.size}`;
    }

    if (this.props.border) className += ' cf-icon--border';
    if (this.props.spin) className += ' cf-icon--spin';
    if (this.props.muted) className += ' cf-icon--muted';
    if (this.props.white) className += ' cf-icon--white';

    return (
      <i className={className}>{this.props.label}</i>
    );
  }
};

module.exports = Icon;
