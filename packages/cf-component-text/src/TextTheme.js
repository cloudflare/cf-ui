import { checkBaseTheme } from 'cf-style-const';

export default baseTheme => {
  checkBaseTheme(baseTheme, 'TextTheme');
  return {
    fontSizeNormal: '1em',
    fontWeightNormal: 400,
    fontSizeNormal: '.8em',
    lineHeightSmall: 1.3,
    textAlignStart: 'left',
    textAlignCenter: 'center',
    textAlignJustify: 'justify',
    textAlignEnd: 'right',
    textTransformCapitalize: 'capitalize',
    'textTransformCapitalize:first-word': 'capitalize',
    textTransformLowercase: 'lowercase',
    textTransformUppercase: 'uppercase',
    colorInfo: '#00a9eb',
    colorSuccess: baseTheme.colorSuccess,
    colorWarning: baseTheme.colorWarning,
    colorError: baseTheme.colorError,
    colorMuted: baseTheme.colorMuted
  };
};
