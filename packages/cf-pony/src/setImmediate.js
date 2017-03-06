// The setimmediate module is a polyfill that sets the global setImmediate...
// Ponies are better.
var prevSetImmediate = global.setImmediate;
import setImmediate from 'setimmediate';
export default setImmediate;
global.setImmediate = prevSetImmediate;
