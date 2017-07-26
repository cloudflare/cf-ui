import { createComponent } from 'cf-style-container';

const TabsItem = createComponent(
  ({ theme, selected }) => ({
    flex: theme.flex,
    background: theme.background,
    color: theme.color,
    cursor: theme.cursor,
    display: theme.display,
    margin: theme.margin,
    padding: theme.padding,
    position: theme.position,
    textAlign: theme.textAlign,
    verticalAlign: theme.verticalAlign,
    outline: theme.outline,
    userSelect: theme.userSelect,

    borderStyle: theme.borderStyle,
    borderTopWidth: selected
      ? theme.borderTopWidthSelected
      : theme.borderTopWidth,
    borderLeftWidth: theme.borderLeftWidth,
    borderBottomWidth: selected
      ? theme.borderBottomWidthSelected
      : theme.borderBottomWidth,
    borderRightWidth: theme.borderRightWidth,
    borderTopColor: selected
      ? theme.borderTopColorSelected
      : theme.borderTopColor,
    borderLeftColor: theme.borderLeftColor,
    borderBottomColor: theme.borderBottomColor,
    borderRightColor: theme.borderRightColor,

    '&:last-child': {
      borderRightWidth: theme['&:last-child'].borderRightWidth
    },

    '&:focus': {
      '&::after': {
        outline: theme['&:focus']['&::after'].outline
      }
    },

    '&:hover': {
      background: selected
        ? theme['&:hover'].backgroundSelected
        : theme['&:hover'].background,
      color: theme['&:hover'].color
    }
  }),
  'li',
  [
    'selected',
    'key',
    'role',
    'tabIndex',
    'aria-controls',
    'aria-selected',
    'onKeyDown',
    'onClick'
  ]
);

export default TabsItem;
