export default baseTheme => ({
  float: 'left',
  position: 'relative',
  backgroundColor: baseTheme.colorWhite,
  color: baseTheme.color.rain,
  backgroundColorActive: baseTheme.color.rain,
  backgroundColorDisabled: baseTheme.disabledBackground,
  borderColorActive: baseTheme.colorBlueLight,
  colorActive: baseTheme.colorWhite,
  colorDisabled: baseTheme.colorGrayBorder,
  zIndexActive: 1,
  cursor: 'pointer',
  cursorDisabled: 'default',
  cursorActive: 'default',
  dot: {
    width: '.5em',
    height: '.5em',
    margin: '1em',
    borderRadius: '50%',
    border: `1px solid ${baseTheme.color.rain}`
  },
  next: {
    backgroundColor: baseTheme.color.rain,
    color: baseTheme.colorWhite,
    borderRadius: '3px'
  },
  prev: {
    backgroundColor: baseTheme.color.rain,
    color: baseTheme.colorWhite,
    borderRadius: '3px'
  },
  link: {
    userSelect: 'none',
    position: 'relative',
    display: 'block',
    paddingTop: '.7em',
    paddingBottom: '.5em',
    paddingLeft: '1em',
    paddingRight: '1em',
    textDecoration: 'none',
    fontWeight: 700,
    color: 'inherit',
    'zIndex:focus': 1
  }
});
