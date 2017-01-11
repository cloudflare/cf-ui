// @flow

import type {CardAction, CardState} from './CardTypes';

const initialState: CardState = {};

function cardReducer(state: CardState = initialState, action: CardAction) {
  switch (action.type) {
    case 'CF_BUILDER_CARD_DRAWER_TOGGLE': {
      const {cardName, drawerId} = action;
      const prevActiveDrawer = state[cardName] && state[cardName].activeDrawer;

      return {
        ...state,
        [cardName]: {
          ...state[cardName],
          activeDrawer: drawerId === prevActiveDrawer ? null : drawerId
        }
      };
    }
    default: {
      return state;
    }
  }
}

module.exports = cardReducer;
