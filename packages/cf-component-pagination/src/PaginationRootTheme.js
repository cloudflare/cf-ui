import { checkBaseTheme } from 'cf-style-container';

export default baseTheme => {
  checkBaseTheme(baseTheme, 'PaginationRootTheme');
  return {
    content: '""',
    display: 'table',
    clear: 'both'
  };
};
