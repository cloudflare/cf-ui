import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

import cloudflareIcons from './cloudflare-icons';

const iconMapping = {
  'caret-down': { content: "'\\f001'" },
  'caret-left': { content: "'\\f002'" },
  'caret-right': { content: "'\\f003'" },
  'caret-up': { content: "'\\f000'" },
  'chevron-down': { content: "'\\f001'" },
  'chevron-left': { content: "'\\f002'" },
  'chevron-right': { content: "'\\f003'" },
  'chevron-up': { content: "'\\f000'" },
  'credit-card': { content: "'\\e93f'" },
  'exclamation-sign': { content: "'\\f005'" },
  'info-sign': { content: "'\\f006'" },
  'ok-sign': { content: "'\\f004'" },
  'remove-sign': { content: "'\\f01a'" },
  'resize-horizontal': { content: "'\\f024'" },
  'resize-vertical': {
    content: "'\\f024'",
    transform: 'rotate(90deg) translateX(-3px)'
  },
  api: { content: "'\\e902'" },
  bolt: { content: "'\\f00b'" },
  calendar: { content: "'\\f01e'" },
  chart: { content: "'\\f00c'" },
  clipboard: { content: "'\\f00a'" },
  door: { content: "'\\e906'" },
  download: { content: "'\\e900'" },
  drive: { content: "'\\f00d'" },
  facebook: { content: "'\\f01f'" },
  file: { content: "'\\f013'" },
  filter: { content: "'\\f00e'" },
  firebolt: { content: "'\\e903'" },
  flowchart: { content: "'\\f00f'" },
  gear: { content: "'\\f01c'" },
  googleplus: { content: "'\\f021'" },
  hamburger: { content: "'\\f010'" },
  happy: { content: "'\\f016'" },
  help: { content: "'\\f01d'" },
  linkedin: { content: "'\\f022'" },
  list: { content: "'\\f012'" },
  lock: { content: "'\\f011'" },
  mail: { content: "'\\e904'" },
  network: { content: "'\\e905'" },
  ok: { content: "'\\f009'" },
  pause: { content: "'\\f007'" },
  plus: { content: "'\\f015'" },
  refresh: { content: "'\\e901'" },
  remove: { content: "'\\f01a'" },
  reorder: { content: "'\\f024'", transform: 'rotate(90deg) translateX(-3px)' },
  sad: { content: "'\\f017'" },
  search: { content: "'\\f018'" },
  shield: { content: "'\\f014'" },
  speech: { content: "'\\f01b'" },
  time: { content: "'\\f008'" },
  twitter: { content: "'\\f020'" },
  upload: { content: "'\\f023'" },
  widen: { content: "'\\f024'" },
  wrench: { content: "'\\f019'" }
};

const Wrapper = createComponent(
  ({ size, spin = false, type, theme }) => {
    let iconData = iconMapping[type];

    if (size) {
      let fontSize = '1em';

      switch (size) {
        case '1.5x':
          fontSize = '1.5em';
          break;
        case '2x':
        case 'large':
          fontSize = '2em';
          break;
        case '2.5x':
          fontSize = '2.5em';
          break;
        case '3x':
        case 'xlarge':
          fontSize = '3em';
          break;
        case '3.5x':
          fontSize = '3.5em';
          break;
        case '4x':
        case 'huge':
          fontSize = '4em';
          break;
      }
      iconData = Object.assign({}, iconData, { fontSize });
    }

    if (spin) {
      iconData = Object.assign({}, iconData, {
        display: 'inline-block',
        animationName: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(359deg)' }
        },
        animationDuration: '2s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
      });
    }

    const { content, ...rest } = iconData;

    return {
      color: theme.color,
      fontStyle: theme.fontStyle,
      fontSize: theme.fontSize,
      ...rest,
      fontFace: {
        fontFamily: 'Cloudflare Icons',
        src: [`data:application/x-font-ttf;base64,${cloudflareIcons}`]
      },
      '::after': {
        content
      }
    };
  },
  'i',
  ['title']
);

const Label = createComponent(
  () => ({
    display: 'none'
  }),
  'span'
);

class Icon extends React.Component {
  render() {
    return (
      <Wrapper {...this.props} title={this.props.label}>
        <Label>{this.props.label}</Label>
      </Wrapper>
    );
  }
}

Icon.propTypes = {
  /*
   * Set the size of the icon
   */
  size: PropTypes.oneOf([
    '1.5x',
    '2x',
    '2.5x',
    '3x',
    '3.5x',
    '4x',
    'large',
    'xlarge',
    'huge'
  ]),
  /*
   * Text to display when a user hovers over the icon
   */
  label: PropTypes.string,
  /*
   * The type of icon to display
   *
   * TODO: Replace with `type: PropTypes.oneOf(Object.keys(iconMapping))` once
   * https://github.com/reactjs/react-docgen/issues/153 is fixed
   */
  type: PropTypes.oneOf([
    'api',
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
    'lock',
    'mail',
    'network',
    'ok',
    'ok-sign',
    'pause',
    'plus',
    'refresh',
    'remove',
    'remove-sign',
    'reorder',
    'resize-horizontal',
    'resize-vertical',
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
   * Renders icon with spinning animation
   */
  spin: PropTypes.bool
};

export default Icon;
