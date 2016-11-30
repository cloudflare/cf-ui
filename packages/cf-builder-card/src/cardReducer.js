const ActionTypes = require('./CardActionTypes');

const initialState = {};

function cardReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CF_BUILDER_CARD_DRAWER_TOGGLE: {
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
