export default baseTheme => ({
  display: 'block',
  position: 'relative',
  margin: 0,
  height: '2.26667rem',
  width: '5.334rem',
  borderRadius: '2px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#aaa',
  cursor: 'pointer',
  colorGray: baseTheme.colorGray,
  colorGrayLight: baseTheme.colorGrayLight,

  fontSize: '0.86667rem',
  marginBottom: '0.38333em',
  minHeight: '1.22em',

  '&::before': {
    display: 'block',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '50%',
    lineHeight: '2.26667rem',
    textAlign: 'center',
    content: 'On',
    left: 0,
    background: baseTheme.colorGreen,
    color: baseTheme.colorWhite
  },

  '&::after': {
    display: 'block',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '50%',
    lineHeight: '2.26667rem',
    textAlign: 'center',
    content: 'Off',
    right: 0,
    background: baseTheme.colorGray,
    color: baseTheme.colorWhite
  }
});
