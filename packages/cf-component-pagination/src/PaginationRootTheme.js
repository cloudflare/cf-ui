import { checkBaseTheme } from 'cf-style-const';

export default baseTheme => {
  checkBaseTheme(baseTheme, 'PaginationRootTheme');
  return {
    content: '""',
    display: 'table',
    clear: 'both'
  };
};
