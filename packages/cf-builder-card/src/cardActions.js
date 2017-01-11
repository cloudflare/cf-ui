// @flow

import type {CardAction} from './CardTypes';

exports.toggleDrawer = function(cardName: string, drawerId: string): CardAction {
  return {
    type: 'CF_BUILDER_CARD_DRAWER_TOGGLE',
    cardName: cardName,
    drawerId: drawerId
  };
};
