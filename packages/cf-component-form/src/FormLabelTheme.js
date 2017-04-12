import { em } from 'polished';

export default baseTheme => ({
  fontSize: em('13px', baseTheme.fontSize),
  display: 'block',
  marginBottom: '0.2em',
  color: baseTheme.colorGrayDark
});
