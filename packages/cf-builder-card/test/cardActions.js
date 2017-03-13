import React from 'react';
import renderer from 'react-test-renderer';
import { createMockStore } from 'cf-test-store';
import { cardActions, CardActionTypes } from 'cf-builder-card';

test('.toggleDrawer() should create an action', () => {
  const store = createMockStore();
  const cardName = 'TEST_CARD_NAME';
  const drawerId = 'TEST_DRAWER_ID';
  store.dispatch(cardActions.toggleDrawer(cardName, drawerId));
  expect(store.getActions()).toEqual([
    {
      type: CardActionTypes.CF_BUILDER_CARD_DRAWER_TOGGLE,
      cardName,
      drawerId
    }
  ]);
});
