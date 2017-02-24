const assert = require('assert');
const { cardReducer, CardActionTypes } = require('../src/index');

describe('cardReducerTest', () => {
  it('should have initial state', () => {
    assert.deepEqual(cardReducer(undefined, {}), {});
  });

  describe('CF_BUILDER_CARD_DRAWER_TOGGLE', () => {
    it('should toggle the drawer', () => {
      const cardName = 'TEST_CARD_NAME';
      const drawerId = 'TEST_DRAWER_ID';

      // Active
      assert.deepEqual(
        cardReducer({}, {
          type: CardActionTypes.CF_BUILDER_CARD_DRAWER_TOGGLE,
          cardName: cardName,
          drawerId: drawerId
        }),
        {
          [cardName]: {
            activeDrawer: drawerId
          }
        }
      );

      // Inactive
      assert.deepEqual(
        cardReducer(
          {
            [cardName]: {
              activeDrawer: drawerId
            }
          },
          {
            type: CardActionTypes.CF_BUILDER_CARD_DRAWER_TOGGLE,
            cardName: cardName,
            drawerId: drawerId
          }
        ),
        {
          [cardName]: {
            activeDrawer: null
          }
        }
      );
    });
  });
});
