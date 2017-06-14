export default baseTheme => ({
  fontFace: {
    fontFamily: 'Cloudflare Icons',
    src: [`data:application/x-font-ttf;charset=utf-8;base64,${cloudflareIcons}`]
  },
  animationName: {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(359deg)' }
  },
  color: baseTheme.colorDarkGray,
  fontStyle: baseTheme.fontStyle,
  fontSize: baseTheme.fontSize,
  borderRadius: baseTheme.borderRadius,
  spinAnimationName: baseTheme.spinAnimation
});
