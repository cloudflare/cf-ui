import React from 'react';
import PropTypes from 'prop-types';

import * as svgs from './svgs.js';

import { createComponent } from 'cf-style-container';

const DEFAULT_HEIGHT = 15.5;

const getHeight = size => {
  let height;
  switch (size) {
    case '1.5x':
      height = 23;
      break;
    case '2x':
      height = 30.5;
      break;
    case '2.5x':
      height = 38;
      break;
    case '3x':
      height = 45.5;
      break;
    case '3.5x':
      height = 53;
      break;
    case '4x':
      height = 60.5;
      break;
    default:
      height = DEFAULT_HEIGHT;
  }
  return height;
};

const getFill = (color, theme) => {
  let fill;
  switch (color) {
    case 'default':
      fill = theme.color.smoke;
      break;
    case 'primary':
      fill = theme.color.marine;
      break;
    case 'success':
      fill = theme.color.grass;
      break;
    case 'warning':
      fill = theme.color.carrot;
      break;
    case 'danger':
      fill = theme.color.apple;
      break;
    case 'black':
      fill = theme.colorBlack;
      break;
    case 'white':
      fill = theme.colorWhite;
      break;
    default:
      fill = theme.colorBlack;
  }
  return fill;
};

const IconWrapper = createComponent(
  ({ height }) => ({
    display: 'inline-block',
    height: height ? height : DEFAULT_HEIGHT
  }),
  'span',
  ['aria-label']
);

class Icon extends React.Component {
  render() {
    const { className, size, label, color } = this.props;
    const icon = svgs[this.props.type.replace(/-/g, '')];
    let height, fill;

    if (!icon) throw `Invalid Icon type ${this.props.type}`;

    if (size) {
      height = getHeight(size);
    }

    const SvgIcon = createComponent(
      ({ color, theme }) => ({
        height: '100%',
        fill: color ? getFill(color, theme) : theme.colorBlack
      }),
      icon
    );

    return (
      <IconWrapper aria-label={label} height={height}>
        <SvgIcon color={color} />
      </IconWrapper>
    );
  }
}

Icon.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([false])])
    .isRequired,
  type: PropTypes.oneOf([
    'api',
    'bolt',
    'calendar',
    'caret-down',
    'caret-left',
    'caret-right',
    'caret-up',
    'chart',
    'clipboard',
    'close',
    'credit-card',
    'door',
    'download',
    'drive',
    'exclamation-sign',
    'facebook',
    'file',
    'filter',
    'firebolt',
    'flowchart',
    'gear',
    'googleplus',
    'hamburger',
    'happy',
    'help',
    'info-sign',
    'linkedin',
    'list',
    'loading',
    'lock',
    'mail',
    'network',
    'ok-sign',
    'ok',
    'pause',
    'plus',
    'refresh',
    'remove',
    'resize-horizontal',
    'sad',
    'search',
    'shield',
    'speech',
    'time',
    'twitter',
    'upload',
    'wrench'
  ]).isRequired,
  size: PropTypes.oneOf(['2x', '2.5x', '3x', '3.5x', '4x']),
  color: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'warning',
    'danger',
    'black',
    'white'
  ])
};

export default Icon;
