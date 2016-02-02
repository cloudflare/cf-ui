let currentFocus;

function trackFocus() {
  const prevFocus = global.HTMLElement.prototype.focus;

  global.HTMLElement.prototype.focus = function() {
    currentFocus = this;
    return prevFocus.apply(this, arguments);
  };

  return function restoreFocus() {
    global.HTMLElement.prototype.focus = prevFocus;
  };
}

function getCurrentFocus() {
  return currentFocus;
}

module.exports = { trackFocus, getCurrentFocus };
