import { checkBaseTheme } from 'cf-style-container';
import { em } from 'polished';

export default baseTheme => {
  checkBaseTheme(baseTheme, 'FormLabelTheme');
  return {
    fontSize: em('13px', baseTheme.fontSize),
    display: 'block',
    marginBottom: '0.2em',
    color: baseTheme.colorGrayDark
  };
};
