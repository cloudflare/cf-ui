import { checkBaseTheme } from 'cf-style-container';

export default baseTheme => {
  checkBaseTheme(baseTheme, 'FormHeaderTheme');
  return {
    padding: '1em',
    borderBottom: `1px solid ${baseTheme.colorGrayLight}`
  };
};
