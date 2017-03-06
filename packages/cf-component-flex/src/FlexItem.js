import React, { PropTypes } from 'react';
import prefixAll from 'inline-style-prefixer/static';

function styles(props) {
  return {
    order: props.order,
    flexGrow: props.grow,
    flexShrink: props.shrink,
    flexBasis: props.basis,
    alignSelf: props.alignSelf
  };
}

class FlexItem extends React.Component {
  render() {
    let className = 'cf-flex__item', style;

    if (this.props.collapse) {
      className += ' cf-flex__item--collapse';
    } else {
      style = prefixAll(styles(this.props));
    }

    return (
      <div className={className} style={style}>
        {this.props.children}
      </div>
    );
  }
}

FlexItem.propTypes = {
  collapse: PropTypes.bool,
  order: PropTypes.number,
  grow: PropTypes.number,
  shrink: PropTypes.number,
  basis: PropTypes.string,
  alignSelf: PropTypes.oneOf([
    'auto',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch'
  ]),
  children: PropTypes.node
};

FlexItem.defaultProps = {
  collapse: false
};

export default FlexItem;
