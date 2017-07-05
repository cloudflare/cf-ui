export default baseTheme => ({
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
