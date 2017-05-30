export default baseTheme => ({
  float: 'left',
  position: 'relative',
  backgroundColor: baseTheme.colorWhite,
  color: baseTheme.colorGray,
  backgroundColorActive: baseTheme.colorWhite,
  backgroundColorDisabled: baseTheme.colorWhite,
  borderColorActive: baseTheme.colorWhite,
  colorActive: baseTheme.colorOrange,
  colorDisabled: baseTheme.colorGrayLight,
  zIndexActive: 1,
  cursor: 'pointer',
  cursorDisabled: 'default',
  cursorActive: 'default',
  dot: {
    width: '.5rem',
    height: '.5rem',
    margin: '1rem',
    borderRadius: '50%',
    border: '1px solid rgba(0, 0, 0, .15)'
  },
  next: {
    backgroundColor: baseTheme.colorWhite,
    color: baseTheme.colorGray,
    borderRadius: '3px'
  },
  prev: {
    backgroundColor: baseTheme.colorWhite,
    color: baseTheme.colorGray,
    borderRadius: '3px'
  },
  link: {
    userSelect: 'none',
    position: 'relative',
    display: 'block',
    paddingTop: '.5em',
    paddingBottom: '.5em',
    paddingLeft: '.1em',
    paddingRight: '.1em',
    textDecoration: 'none',
    fontWeight: baseTheme.weightBold,
    color: 'inherit',
    'zIndex:focus': 1
  }
});
