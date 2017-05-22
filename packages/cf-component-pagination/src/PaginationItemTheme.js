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
  dot: {
    width: '.5rem',
    height: '.5rem',
    margin: '1rem',
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
  }
});
