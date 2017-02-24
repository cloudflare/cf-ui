const assert = require('assert');
const { createMockStore } = require('cf-test-store');

const { cardActions, CardActionTypes } = require('../src/index');

describe('cardActionsTest', function() {
  describe('.toggleDrawer()', function() {
    it('should create an action', function() {
      const store = createMockStore();
      const cardName = 'TEST_CARD_NAME';
      const drawerId = 'TEST_DRAWER_ID';
      store.dispatch(cardActions.toggleDrawer(cardName, drawerId));
      assert.deepEqual(store.getActions(), [
        {
          type: CardActionTypes.CF_BUILDER_CARD_DRAWER_TOGGLE,
          cardName,
          drawerId
        }
      ]);
    });
  });
});
