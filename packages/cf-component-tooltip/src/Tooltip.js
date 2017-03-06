import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import createTooltip from './createTooltip';

class Tooltip extends React.Component {
  componentDidMount() {
    this.destroyTooltip = createTooltip(
      findDOMNode(this),
      this.props.content,
      this.props.position
    );
  }

  componentWillUnmount() {
    this.destroyTooltip();
  }

  render() {
    return this.props.children;
  }
}

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  position: PropTypes.string
};

Tooltip.defaultProps = {
  position: 'top center'
};

export default Tooltip;
