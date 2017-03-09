import { cardReducer, CardActionTypes } from 'cf-builder-card';

test('should have initial state', () => {
  expect(cardReducer(undefined, {})).toEqual({});
});

test('CF_BUILDER_CARD_DRAWER_TOGGLE should toggle the drawer', () => {
  const cardName = 'TEST_CARD_NAME';
  const drawerId = 'TEST_DRAWER_ID';

  // Active
  expect(
    cardReducer(
      {},
      {
        type: CardActionTypes.CF_BUILDER_CARD_DRAWER_TOGGLE,
        cardName: cardName,
        drawerId: drawerId
      }
    )
  ).toEqual({
    [cardName]: {
      activeDrawer: drawerId
    }
  });

  // Inactive
  expect(
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
    )
  ).toEqual({
    [cardName]: {
      activeDrawer: null
    }
  });
});
