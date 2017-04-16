export default baseTheme => ({
  float: 'left',
  position: 'relative',
  backgroundColor: baseTheme.colorWhite,
  color: baseTheme.colorInfo,
  backgroundColorActive: baseTheme.colorInfo,
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
    border: '1px solid rgba(0, 0, 0, .15)'
  },
  next: {
    backgroundColor: baseTheme.colorBlueLight,
    color: baseTheme.colorWhite,
    borderRadius: '3px'
  },
  prev: {
    backgroundColor: baseTheme.colorBlueLight,
    color: baseTheme.colorWhite,
    borderRadius: '3px'
  }
});
