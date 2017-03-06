import React, { PropTypes } from 'react';

class Heading extends React.Component {
  render() {
    const tagName = 'h' + this.props.size;
    const className = 'cf-heading cf-heading--' + this.props.size;
    return React.createElement(tagName, { className }, this.props.children);
  }
}

Heading.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node
};

export default Heading;
