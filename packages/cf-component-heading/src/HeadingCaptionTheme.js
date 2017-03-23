import { checkBaseTheme } from 'cf-style-const';

export default baseTheme => {
  checkBaseTheme(baseTheme, 'HeadingCaptionTheme');
  return {
    marginLeft: '.5em',
    color: baseTheme.colorGray,
    fontSize: '80%',
    fontColor: baseTheme.fontColor,
    fontWeight: baseTheme.fontWeight
  };
};
