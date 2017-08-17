export default baseTheme => ({
  zIndex: 0,
  width: '100%',
  height: baseTheme.inputHeight,
  margin: '0 0 0.75rem',
  padding: '0.45em 0.75em',
  border: `1px solid ${baseTheme.color.hail}`,
  borderRadius: baseTheme.borderRadius,
  flex: 'initial',

  verticalAlign: 'middle',
  fontFamily: baseTheme.fontFamily,
  fontSize: '0.86667rem',

  background: baseTheme.colorWhite,
  color: baseTheme.color.charcoal,
  outline: 'none',

  transition: 'border-color 0.2s ease',
  textIndent: 'initial',

  '&:hover': {
    borderColor: '#256298'
  },

  '&:focus': {
    outline: '5px auto -webkit-focus-ring-color',
    outlineOffset: '-1px'
  }
});
