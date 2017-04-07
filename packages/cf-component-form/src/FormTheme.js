import { checkBaseTheme } from 'cf-style-const';

export default baseTheme => {
  checkBaseTheme(baseTheme, 'FormTheme');
  return {
    background: 'white',
    border: `1px solid ${baseTheme.colorGrayLight}`,
    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.05)'
  };
};
