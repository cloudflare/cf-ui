import React, {PropTypes} from 'react';
import createTooltip from './createTooltip';

export default class TooltipRegion extends React.Component {
  static propTypes = {
    position: PropTypes.string,
    querySelector: PropTypes.string
  };

  static defaultProps = {
    position: 'top center',
    querySelector: '[title]'
  };

  componentDidMount() {
    const els = this.refs.tooltipRegion.querySelectorAll(
      this.props.querySelector
    );

    this.destroyTooltips = [].map.call(els, el => {
      return createTooltip(el, el.title, this.props.position);
    });
  }

  componentWillUnmount() {
    this.destroyTooltips.forEach(destroyTooltips => destroyTooltips());
  }

  render() {
    return (
      <div className="cf-tooltip__region" ref="tooltipRegion">
        {this.props.children}
      </div>
    );
  }
}
