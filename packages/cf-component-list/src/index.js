import { applyTheme } from 'cf-style-container';

import UnorderedListUnstyled from './UnorderedList';
import UnorderedListTheme from './UnorderedListTheme';
import OrderedListUnstyled from './OrderedList';
import OrderedListTheme from './OrderedListTheme';

import ListItemUnstyled from './ListItem';
import ListItemTheme from './ListItemTheme';

const UnorderedList = applyTheme(UnorderedListUnstyled, UnorderedListTheme);
const OrderedList = applyTheme(OrderedListUnstyled, OrderedListTheme);
const ListItem = applyTheme(ListItemUnstyled, ListItemTheme);

export {
  UnorderedList,
  UnorderedListUnstyled,
  UnorderedListTheme,
  OrderedList,
  OrderedListUnstyled,
  OrderedListTheme,
  ListItem,
  ListItemUnstyled,
  ListItemTheme
};
