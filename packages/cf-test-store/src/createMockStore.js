const configureStore = require('redux-mock-store');
const {default: thunk} = require('redux-thunk');

var mockStore = configureStore([
  thunk
]);

function createMockStore(state) {
  return mockStore(state);
}

module.exports = createMockStore;
