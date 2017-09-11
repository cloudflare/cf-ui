import React from 'react';
import PropTypes from 'prop-types';

import SVG_COMPONENTS from './reactsvgs';
import { createComponent } from 'cf-style-container';

const DEFAULT_HEIGHT = 15;

const getHeight = size => {
  let height;
  switch (size) {
    case '1.5x':
      height = 22;
      break;
    case '2x':
      height = 30;
      break;
    case '2.5x':
      height = 37;
      break;
    case '3x':
      height = 45;
      break;
    case '3.5x':
      height = 52;
      break;
    case '4x':
      height = 60;
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

const iconStyles = ({ theme, size, color }) => ({
  height: size ? getHeight(size) : DEFAULT_HEIGHT,
  fill: color ? getFill(color, theme) : theme.colorBlack
});

class Icon extends React.Component {
  render() {
    const Svg = SVG_COMPONENTS[this.props.type];

    const { size, label, className } = this.props;

    return <Svg className={className} label={label ? label : ''} />;
  }
}

Icon.propTypes = {
  className: PropTypes.string.isRequired,
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
    'google-plus',
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

  color: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'warning',
    'danger',
    'black',
    'white'
  ]),

  size: PropTypes.oneOf(['2x', '2.5x', '3x', '3.5x', '4x'])
};

export default createComponent(iconStyles, Icon);
