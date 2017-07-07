export default baseTheme => ({
  margin: '1rem',
  padding: '1rem',
  border: '1px solid transparent',

  borderRadius: baseTheme.borderRadius,
  color: baseTheme.colorWhite,
  default: {
    backgroundColor: baseTheme.color.charcoal,
    borderColor: baseTheme.color.charcoal
  },
  info: {
    backgroundColor: baseTheme.color.marine,
    borderColor: baseTheme.color.rain
  }
});
