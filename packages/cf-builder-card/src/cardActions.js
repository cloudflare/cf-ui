import ActionTypes from './CardActionTypes';

const toggleDrawer = function(cardName, drawerId) {
  return {
    type: ActionTypes.CF_BUILDER_CARD_DRAWER_TOGGLE,
    cardName: cardName,
    drawerId: drawerId
  };
};

export default { toggleDrawer };
