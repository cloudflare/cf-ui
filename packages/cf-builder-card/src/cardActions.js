import ActionTypes from './CardActionTypes';

export const toggleDrawer = function(cardName, drawerId) {
  return {
    type: ActionTypes.CF_BUILDER_CARD_DRAWER_TOGGLE,
    cardName: cardName,
    drawerId: drawerId
  };
};
