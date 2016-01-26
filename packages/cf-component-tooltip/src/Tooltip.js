import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import createTooltip from './createTooltip';

export default class Tooltip extends React.Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    position: PropTypes.string
  };

  static defaultProps = {
    position: 'top center'
  };

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
