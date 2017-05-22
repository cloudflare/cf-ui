import React from 'react';
import PropTypes from 'prop-types';

import { createComponent } from '../../cf-style-container';

const Wrapper = createComponent(({
  border = false,
  spin = false,
  type,
  theme
}) => {
  const additionalRules = {};
  let fontPoint = '';

  switch (type) {
    case 'refresh':
      fontPoint = "'\\901'";
      break;
    case 'caret-up':
    case 'chevron-up':
      fontPoint = "'\\F000'";
      break;
    case 'caret-down':
    case 'chevron-down':
      fontPoint = "'\\F001'";
      break;
    case 'caret-left':
    case 'chevron-left':
      fontPoint = "'\\F002'";
      break;
    case 'caret-right':
    case 'chevron-right':
      fontPoint = "'\\F003'";
      break;
    case 'ok-sign':
      fontPoint = "'\\F004'";
      break;
    case 'exclamation-sign':
      fontPoint = "'\\F005'";
      break;
    case 'info-sign':
      fontPoint = "'\\F006'";
      break;
    case 'pause':
      fontPoint = "'\\F007'";
      break;
    case 'time':
      fontPoint = "'\\F008'";
      break;
    case 'ok':
      fontPoint = "'\\F009'";
      break;
    case 'clipboard':
      fontPoint = "'\\F00A'";
      break;
    case 'bolt':
      fontPoint = "'\\F00B'";
      break;
    case 'chart':
      fontPoint = "'\\F00C'";
      break;
    case 'drive':
      fontPoint = "'\\F00D'";
      break;
    case 'filter':
      fontPoint = "'\\F00E'";
      break;
    case 'flowchart':
      fontPoint = "'\\F00F'";
      break;
    case 'hamburger':
      fontPoint = "'\\F010'";
      break;
    case 'lock':
      fontPoint = "'\\F011'";
      break;
    case 'list':
      fontPoint = "'\\F012'";
      break;
    case 'file':
      fontPoint = "'\\F013'";
      break;
    case 'shield':
      fontPoint = "'\\F014'";
      break;
    case 'plus':
      fontPoint = "'\\F015'";
      break;
    case 'happy':
      fontPoint = "'\\F016'";
      break;
    case 'sad':
      fontPoint = "'\\F017'";
      break;
    case 'search':
      fontPoint = "'\\F018'";
      break;
    case 'wrench':
      fontPoint = "'\\F019'";
      break;
    case 'remove-sign':
    case 'remove':
      fontPoint = "'\\F01A'";
      break;
    case 'speech':
      fontPoint = "'\\F01B'";
      break;
    case 'gear':
      fontPoint = "'\\F01C'";
      break;
    case 'help':
      fontPoint = "'\\F01D'";
      break;
    case 'widen':
      fontPoint = "'\\F022'";
      break;
    case 'calendar':
      fontPoint = "'\\F01E'";
      break;
    case 'facebook':
      fontPoint = "'\\F01F'";
      break;
    case 'twitter':
      fontPoint = "'\\F020'";
      break;
    case 'googleplus':
      fontPoint = "'\\F021'";
      break;
    case 'linkedin':
      fontPoint = "'\\F022'";
      break;
    case 'resize-horizontal':
      fontPoint = "'\\F024'";
      break;
    case 'reorder':
    case 'resize-vertical':
      fontPoint = "'\\F024'";
      additionalRules.transform = 'rotate(90deg)';
      break;
    case 'upload':
      fontPoint = "'\\F025'";
      break;
    case 'close':
      fontPoint = "'\\D7'";
      additionalRules.fontFamily = theme.fontFamily;
      break;
  }

  if (border) {
    additionalRules.border = `1px solid ${theme.color}`;
    additionalRules.padding = '.2em .25em .15em';
    additionalRules.borderRadius = theme.borderRadius;
  }

  if (spin) {
    additionalRules.display = 'inline-block';
    additionalRules.animation = `${theme.spinAnimationName} 2s infinite linear`;
  }

  return {
    color: theme.color,
    fontSize: theme.fontSize,
    fontStyle: theme.fontStyle,
    fontFamily: theme.iconFontFamily,

    '::before': {
      ...additionalRules,
      content: fontPoint
    }
  };
}, 'i');

const Label = createComponent(
  () => ({
    display: 'none'
  }),
  'span'
);

class Icon extends React.Component {
  render() {
    return (
      <Wrapper {...this.props}>
        <Label>{this.props.label}</Label>
      </Wrapper>
    );
  }
}

Icon.propTypes = {
  /**
   * The a11y label set for screen-readers(?). Needs to correspond with the type
   * prop.
   */
  label: PropTypes.string,
  /*
   * The type of icon to display
   */
  type: PropTypes.oneOf([
    'bolt',
    'calendar',
    'caret-down',
    'caret-left',
    'caret-right',
    'caret-up',
    'chart',
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'clipboard',
    'close',
    'drive',
    'exclamation-sign',
    'facebook',
    'file',
    'filter',
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
    'ok',
    'ok-sign',
    'pause',
    'plus',
    'refresh',
    'remove',
    'remove-sign',
    'resize-horizontal',
    'sad',
    'search',
    'shield',
    'speech',
    'time',
    'twitter',
    'upload',
    'widen',
    'wrench'
  ]).isRequired,
  /**
   * Sets a 1px border in color of passed in prop, defaults to Icon color
   * default
   */
  border: PropTypes.bool,
  /**
   * Renders icon with spinning animation
   */
  spin: PropTypes.bool,
  /**
   * TODO: What is this?
   */
  role: PropTypes.string
};

export default Icon;
