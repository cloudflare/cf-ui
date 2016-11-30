const React = require('react');
const {PropTypes} = React;
const createTooltip = require('./createTooltip');

class TooltipRegion extends React.Component {
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

TooltipRegion.propTypes = {
  position: PropTypes.string,
  querySelector: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node)
};

TooltipRegion.defaultProps = {
  position: 'top center',
  querySelector: '[title]'
};

module.exports = TooltipRegion;
