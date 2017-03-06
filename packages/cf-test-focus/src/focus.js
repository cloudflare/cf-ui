import { stubMethod } from 'cf-test-stub';

const originalFocus = global.HTMLElement.prototype.focus;

let currentFocus;

export function trackFocus() {
  return stubMethod(global.HTMLElement.prototype, 'focus', function() {
    currentFocus = this;
    return originalFocus.apply(this, arguments);
  });
}

export function getCurrentFocus() {
  return currentFocus;
}
