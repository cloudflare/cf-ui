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

  borderTopWidth: 1,
  borderTopWidthSelected: 2,
  borderLeftWidth: 1,
  borderBottomWidth: 1,
  borderBottomWidthSelected: 0,
  borderRightWidth: 0,

  borderStyle: 'solid',
  borderTopColor: '#dedede',
  borderTopColorSelected: baseTheme.colorBlue,
  borderLeftColor: '#dedede',
  borderBottomColor: '#dedede',
  borderRightColor: '#dedede',

  '&:last-child': {
    borderRightWidth: 1
  },

  '&:focus': {
    '&::after': {
      outline: 'none'
    }
  },

  '&:hover': {
    background: '#f6f6f6',
    backgroundSelected: baseTheme.colorWhite,
    color: baseTheme.colorBlue
  }
});
