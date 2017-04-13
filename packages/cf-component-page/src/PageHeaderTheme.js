import { checkBaseTheme } from 'cf-style-const';

export default baseTheme => {
  checkBaseTheme(baseTheme, 'PageHeaderTheme');
  return {
    marginBottom: 0,
    marginTop: 0,
    fontSize: '1.6em',
    defaultColor: baseTheme.defaultBackground
  };
};
