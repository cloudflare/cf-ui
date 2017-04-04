import { checkBaseTheme } from 'cf-style-const';

export default baseTheme => {
  checkBaseTheme(baseTheme, 'PaginationTheme');
  return {
    content: '""',
    display: 'table',
    clear: 'both',
    listStyle: 'none',
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    float: 'left',
    borderRadius: '3px',
    boxShadow: '0 1px 1px rgba(0, 0, 0, .05)'
  };
};
