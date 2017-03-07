import React, { PropTypes } from 'react';
import createTooltip from './createTooltip';

class TooltipRegion extends React.Component {
  componentDidMount() {
    const els = this.tooltipRegion.querySelectorAll(this.props.querySelector);

    this.destroyTooltips = [].map.call(els, el => {
      return createTooltip(el, el.title, this.props.position);
    });
  }

  componentWillUnmount() {
    this.destroyTooltips.forEach(destroyTooltips => destroyTooltips());
  }

  render() {
    return (
      <div
        className="cf-tooltip__region"
        ref={tooltip => this.tooltipRegion = tooltip}
      >
        {this.props.children}
      </div>
    );
  }
}

TooltipRegion.propTypes = {
  position: PropTypes.string,
  querySelector: PropTypes.string,
  children: PropTypes.node
};

TooltipRegion.defaultProps = {
  position: 'top center',
  querySelector: '[title]'
};

export default TooltipRegion;
