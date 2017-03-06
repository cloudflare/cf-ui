import React, { PropTypes } from 'react';

class Label extends React.Component {
  render() {
    return React.createElement(
      this.props.tagName,
      {
        className: 'cf-label cf-label--' + this.props.type
      },
      this.props.children
    );
  }
}

Label.propTypes = {
  type: PropTypes.oneOf([
    'default',
    'info',
    'success',
    'warning',
    'error'
  ]).isRequired,
  tagName: PropTypes.string,
  children: PropTypes.node
};

Label.defaultProps = {
  tagName: 'span'
};

export default Label;
