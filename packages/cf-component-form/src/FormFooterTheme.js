import { checkBaseTheme } from 'cf-style-const';

export default baseTheme => {
  checkBaseTheme(baseTheme, 'FormFooterTheme');
  return {
    padding: '1em',
    borderTop: `1px solid ${baseTheme.colorGrayLight}`,
    textAlign: 'right'
  };
};
