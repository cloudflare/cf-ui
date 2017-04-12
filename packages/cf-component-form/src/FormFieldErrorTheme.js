export default baseTheme => ({
  position: 'relative',
  marginTop: '-0.75em',
  padding: '0.5em 1em',
  border: `1px solid  ${baseTheme.colorRedDark}`,
  fontSize: '0.8em',
  fontWeight: baseTheme.weightSemiBold,
  background: baseTheme.colorRed,
  color: baseTheme.colorWhite,
  boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)'
});
