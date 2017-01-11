// @flow

type DrawerToggle = {
  type: 'CF_BUILDER_CARD_DRAWER_TOGGLE',
  cardName: string,
  drawerId: string
};

export type CardAction =
  | DrawerToggle;

export type CardState = {
  [cardName: string]: {
    activeDrawer?: string
  }
};

export type State = {
  cards: CardState
};
