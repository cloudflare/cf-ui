import { checkBaseTheme } from 'cf-style-const';

export default baseTheme => {
  checkBaseTheme(baseTheme, 'HeadingCaptionTheme');
  return {
    color: baseTheme.colorDarkGray,
    fontSize: '1rem',
    fontColor: baseTheme.fontColorHeadingCaption,
    fontWeight: 'lighter',
    marginLeft: '.3rem'
  };
};
