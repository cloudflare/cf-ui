export default baseTheme => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  maxHeight: '25%',
  overflow: 'auto',
  zIndex: baseTheme.zIndexMax,
  fontSize: baseTheme.fontSize
});
