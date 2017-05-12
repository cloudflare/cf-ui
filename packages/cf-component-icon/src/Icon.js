import React from 'react';
import PropTypes from 'prop-types';

class Icon extends React.Component {
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
      <i className={className} role={this.props.role}>
        {this.props.label &&
          <span className="cf-icon__label">{this.props.label}</span>}
      </i>
    );
  }
}

Icon.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([false])
  ]).isRequired,
  type: PropTypes.oneOf([
    'bolt',
    'calendar',
    'caret-down',
    'caret-left',
    'caret-right',
    'caret-up',
    'chart',
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'clipboard',
    'close',
    'drive',
    'exclamation-sign',
    'facebook',
    'file',
    'filter',
    'flowchart',
    'gear',
    'googleplus',
    'hamburger',
    'happy',
    'help',
    'info-sign',
    'linkedin',
    'list',
    'loading',
    'lock',
    'ok',
    'ok-sign',
    'pause',
    'plus',
    'refresh',
    'remove',
    'remove-sign',
    'resize-horizontal',
    'sad',
    'search',
    'shield',
    'speech',
    'time',
    'twitter',
    'upload',
    'widen',
    'wrench'
  ]).isRequired,
  size: PropTypes.oneOf(['2x', '3x', '4x', 'large', 'xlarge']),
  border: PropTypes.bool,
  spin: PropTypes.bool,
  muted: PropTypes.bool,
  white: PropTypes.bool,
  role: PropTypes.string
};

export default Icon;
