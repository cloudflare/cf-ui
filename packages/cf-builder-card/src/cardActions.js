const ActionTypes = require('./CardActionTypes');

exports.toggleDrawer = function(cardName, drawerId) {
  return {
    type: ActionTypes.CF_BUILDER_CARD_DRAWER_TOGGLE,
    cardName: cardName,
    drawerId: drawerId
  };
};
