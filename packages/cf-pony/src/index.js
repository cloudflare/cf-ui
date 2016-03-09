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

exports.arrayIncludes = require('array-includes');
exports.arrayFind = require('array.prototype.find');
exports.objectAssign = require('object-assign');
exports.objectIs = require('object-is');
exports.stringIncludes = require('string-includes');
exports.stringTrim = require('string.prototype.trim');
exports.stringTrimLeft = require('string.prototype.trimleft');
exports.stringTrimRight = require('string.prototype.trimright');
exports.stringStartsWith = require('string.prototype.startswith');
exports.stringEndsWith = require('string.prototype.endswith');
