export default baseTheme => ({
  position: 'relative',
  display: 'block',
  paddingTop: '.5em',
  paddingBottom: '.5em',
  paddingLeft: '1em',
  paddingRight: '1em',
  textDecoration: 'none',
  fontWeight: 700,
  color: 'inherit',
  'zIndex:focus': 1,
  cursorDisabled: 'default',
  cursorActive: 'default',
  dot: {
    marginLeft: '-1em',
    marginTop: '-1em',
    paddingTop: '1em',
    paddingBottom: '1.5em',
    paddingLeft: '1em',
    paddingRight: '1.5em'
  },
  next: {},
  prev: {}
});
