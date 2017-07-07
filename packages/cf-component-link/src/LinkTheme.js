export default baseTheme => ({
  color: theme.color.marine,
  disabledColor: theme.colorGray,
  outline: 'none',
  textDecoration: 'none',
  transition: 'all 150ms ease',
  cursor: 'pointer',
  disabledCursor: 'default',

  '&:hover': {
    color: theme.color.tangerine,
    disabledColor: theme.colorGray
  },

  '&:focus': {
    color: theme.color.sky,
    outline: '5px auto -webkit-focus-ring-color',
    outlineOffset: '-1px'
  },

  '&:active': {
    color: theme.color.sunrise,
    outline: 'none'
  }
});
