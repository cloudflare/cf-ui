import { checkBaseTheme } from 'cf-style-const';

export default baseTheme => {
  checkBaseTheme(baseTheme, 'FormFieldsetTheme');
  return {
    main: {
      margin: 0,
      padding: 0,
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderBottom: `1px solid ${baseTheme.colorGrayLight}`
    },
    legend: {
      padding: '1em',
      borderBottom: 'none',
      marginBottom: 0
    },
    content: {
      padding: '1em',
      border: `0 solid ${baseTheme.colorGrayLight}`,
      borderTopWidth: '1px',
      background: '#eee'
    }
  };
};
