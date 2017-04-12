import { checkBaseTheme } from 'cf-style-container';

export default baseTheme => {
  checkBaseTheme(baseTheme, 'FormFooterTheme');
  return {
    padding: '1em',
    borderTop: `1px solid ${baseTheme.colorGrayLight}`,
    textAlign: 'right'
  };
};
