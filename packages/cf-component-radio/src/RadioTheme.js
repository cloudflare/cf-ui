export default baseTheme => ({
  cursor: 'pointer',
  display: 'block',
  minHeight: '1em',
  padding: '0 0 0 2em',
  margin: 'initial',

  '&:first-child': {
    marginTop: 'initial'
  },

  '&:hover input': {
    borderColor: baseTheme.color.deepsea
  }
});
