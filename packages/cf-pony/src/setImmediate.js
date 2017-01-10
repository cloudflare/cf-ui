// @flow

// The setimmediate module is a polyfill that sets the global setImmediate...
// Ponies are better.
var prevSetImmediate = global.setImmediate;
module.exports = require('setimmediate');
global.setImmediate = prevSetImmediate;
