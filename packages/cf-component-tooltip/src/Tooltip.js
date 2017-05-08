import React from 'react';
import PropTypes from 'prop-types';
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

  componentWillReceiveProps(nextProps) {
    if (
      this.props.content !== nextProps.content ||
      this.props.position !== nextProps.position
    ) {
      this.destroyTooltip();
      this.destroyTooltip = createTooltip(
        findDOMNode(this),
        nextProps.content,
        nextProps.position
      );
    }
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
