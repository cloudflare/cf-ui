export default baseTheme => ({
  message: {
    position: 'relative',
    zIndex: 2
  },
  close: {
    position: 'absolute',
    zIndex: 3,
    top: 0,
    right: 0,
    bottom: 0,
    width: '2.5em',
    cursor: 'pointer',
    '&:hover': {
      //TODO change colors for different notifs
      background: baseTheme.color.grass
    },
    '&::before': {
      content: "'\\00D7'",
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '1.25rem'
    }
  },
  progress: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(255,255,255,0.1)'
  },
  container: {
    position: 'relative',
    padding: '0.5rem 2.5rem',
    border: '1px solid',
    verticalAlign: 'middle',
    webkitTextStroke: '0',
    webkitFontSmoothing: 'antialiased',
    cursor: 'pointer',
    transformOrigin: 'bottom left',
    '&::before': {
      // fontFamily: '"cloudflare-font"',
      // fontSize: '1.25rem',
      position: 'absolute',
      top: '50%',
      left: '0.75rem',
      transform: 'translate(0, -50%)',
      lineHeight: '1',
      verticalAlign: 'middle',
      slideRight: {
        '0%': {
          transform: 'translateX(-75px)'
        },
        '100%': {
          transform: 'translateX(0)'
        }
      }
    },
    slideup: {
      '0%': {
        transform: 'scaleY(0)'
      },
      '100%': {
        transform: 'scaleY(1)'
      }
    }
    // '&::before': {
    //   // animation: cf-notifications-slide-from-left 200ms ease-out;
    // }
  }
});
