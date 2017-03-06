import Tooltip from 'tether-tooltip';

export default function createTooltip(el, content, position) {
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
