import React, { PropTypes } from 'react';
import prefixAll from 'inline-style-prefixer/static';

function styles(props) {
  return {
    flexDirection: props.direction,
    flexWrap: props.wrap,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    alignContent: props.alignContent
  };
}

class Flex extends React.Component {
  render() {
    let className = 'cf-flex', style;

    if (this.props.spacing) {
      className += ' cf-flex--' + this.props.spacing;
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

Flex.propTypes = {
  spacing: PropTypes.oneOf(['thin', 'wide']),
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse'
  ]),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around'
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch'
  ]),
  alignContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'stretch'
  ]),
  children: PropTypes.node
};

export default Flex;
