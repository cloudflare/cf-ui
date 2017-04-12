import { checkBaseTheme } from 'cf-style-container';

export default baseTheme => {
  checkBaseTheme(baseTheme, 'PaginationItemTheme');
  return {
    float: 'left',
    position: 'relative',
    backgroundColor: baseTheme.colorWhite,
    color: baseTheme.colorInfo,
    backgroundColorActive: baseTheme.colorInfo,
    backgroundColorDisabled: baseTheme.disabledBackground,
    borderColorActive: baseTheme.colorBlueLight,
    colorActive: baseTheme.colorWhite,
    colorDisabled: baseTheme.colorGrayBorder,
    zIndexActive: 1,
    border: '1px solid rgba(0, 0, 0, .15)',
    borderBottomWidth: '2px',
    'borderTopLeftRadius:first-child': '3px',
    'borderBottomLeftRadius:first-child': '3px',
    'borderTopLeftRadius:last-child': '3px',
    'borderBottomLeftRadius:last-child': '3px',
    'marginLeft&+&': '-1px'
  };
};
