import { checkBaseTheme } from 'cf-style-const';

export default baseTheme => {
  checkBaseTheme(baseTheme, 'FormHeaderTheme');
  return {
    padding: '1em',
    borderBottom: `1px solid ${baseTheme.colorGrayLight}`
  };
};
