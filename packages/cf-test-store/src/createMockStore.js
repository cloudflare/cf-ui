const {'default': configureStore} = require('redux-mock-store');
const {'default': thunk} = require('redux-thunk');

module.exports = (state) => configureStore([thunk])(state);
