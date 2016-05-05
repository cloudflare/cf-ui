const ActionTypes = require('./CardActionTypes');
const cf = require('cf-pony');

const initialState = {};

function cardReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.CF_BUILDER_CARD_DRAWER_TOGGLE:
      const {cardName, drawerId} = action;
      const prevActiveDrawer = state[cardName] && state[cardName].activeDrawer;
      return cf.objectAssign({}, state, {
        [cardName]: cf.objectAssign({}, state[cardName], {
          activeDrawer: drawerId === prevActiveDrawer ? null : drawerId
        })
      });

    default:
      return state;
  }
}

module.exports = cardReducer;
