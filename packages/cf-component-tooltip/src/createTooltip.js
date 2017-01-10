// @flow

const Tooltip = require('tether-tooltip');

function createTooltip(el: HTMLElement, content: string, position: string) {
  const instance = new Tooltip({
    target: el,
    classes: '',
    content,
    position
  });

  return function destroyTooltip() {
    instance.destroy();
  };
}

module.exports = createTooltip;
