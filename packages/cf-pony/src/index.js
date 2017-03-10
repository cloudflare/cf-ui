/**
 * When we finally want to deprecate one of these methods:
 *
 * 1) Uncomment the following:
 *
 *   function wrapWarning(prev, next, method) {
 *     console.warn('Method `' + prev + '` is deprecated. Use the native `' + next + '` method instead.');
 *
 *     return function() {
 *       return method.apply(null, arguments);
 *     };
 *   }
 *
 * 2) Wrap the method like this:
 *
 *   exports.arrayIncludes = wrapWarning('arrayIncludes', 'Array.prototype.includes', require('array-includes'));
 */

import setImmediate from './setImmediate';
import requestAnimationFrame, { cancel as cancelAnimationFrame } from 'raf';
import arrayIncludes from 'array-includes';
import arrayFind from 'array.prototype.find';
import objectAssign from 'object-assign';
import objectIs from 'object-is';
import stringIncludes from 'string-includes';
import stringTrim from 'string.prototype.trim';
import stringTrimLeft from 'string.prototype.trimleft';
import stringTrimRight from 'string.prototype.trimright';
import stringStartsWith from 'string.prototype.startswith';
import stringEndsWith from 'string.prototype.endswith';

export default {
  setImmediate,
  requestAnimationFrame,
  cancelAnimationFrame,
  arrayIncludes,
  arrayFind,
  objectAssign,
  objectIs,
  stringIncludes,
  stringTrim,
  stringTrimLeft,
  stringTrimRight,
  stringStartsWith,
  stringEndsWith
};
