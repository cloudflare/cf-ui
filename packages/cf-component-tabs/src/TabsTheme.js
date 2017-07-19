export default baseTheme => ({
  flex: 1,
  background: baseTheme.color.white,
  color: baseTheme.colorBlue,
  cursor: 'pointer',
  display: 'table-cell',
  margin: 0,
  padding: '1.5rem 1rem',
  position: 'relative',
  textAlign: 'center',
  verticalAlign: 'middle',
  outline: 'none',
  userSelect: 'none',

  borderTopWidth: 0,
  borderTopWidthSelected: 2,
  borderLeftWidth: 0,
  borderBottomWidth: 1,
  borderBottomWidthSelected: 0,
  borderRightWidth: 1,

  borderStyle: 'solid',
  borderTopColor: baseTheme.color.smoke,
  borderTopColorSelected: baseTheme.colorBlue,
  borderLeftColor: baseTheme.color.smoke,
  borderBottomColor: baseTheme.color.smoke,
  borderRightColor: baseTheme.color.smoke,

  '&:last-child': {
    borderRightWidth: 0
  },

  '&:focus': {
    '&::after': {
      outline: 'none'
    }
  },

  '&:hover': {
    background: baseTheme.color.moonshine,
    backgroundSelected: baseTheme.colorWhite,
    color: baseTheme.colorBlue
  }
});
