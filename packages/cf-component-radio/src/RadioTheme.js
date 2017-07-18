export default baseTheme => ({
  cursor: 'pointer',
  display: 'block',
  minHeight: '1em',
  paddingLeft: '2em',
  marginTop: 'initial',

  '&:first-child': {
    marginTop: 'initial'
  },

  '&:hover input': {
    borderColor: baseTheme.color.deepsea
  }
});
