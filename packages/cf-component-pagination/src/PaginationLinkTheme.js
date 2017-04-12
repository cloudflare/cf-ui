import { checkBaseTheme } from 'cf-style-container';

export default baseTheme => {
  checkBaseTheme(baseTheme, 'PaginationLinkTheme');
  return {
    position: 'relative',
    display: 'block',
    paddingTop: '.5em',
    paddingBottom: '.5em',
    paddingLeft: '1em',
    paddingRight: '1em',
    textDecoration: 'none',
    fontWeight: 700,
    color: 'inherit',
    'zIndex:focus': 1,
    cursorDisabled: 'default',
    cursorActive: 'default'
  };
};
