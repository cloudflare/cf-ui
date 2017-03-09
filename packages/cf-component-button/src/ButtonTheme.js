import { color } from 'cf-style-container';
import { checkBaseTheme } from 'cf-style-const';

export default baseTheme => {
  checkBaseTheme(baseTheme, 'ButtonTheme');
  return {
    fontSize: `${(parseFloat(baseTheme.fontSize) - 1) / parseFloat(baseTheme.fontSize)}rem`,
    paddingTop: '0.7em',
    paddingRight: '1em',
    paddingBottom: '0.4em',
    paddingLeft: '1em',
    spacing: '0.4rem',
    display: 'inline-block',
    position: 'relative',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    border: 'none',
    borderBottom: '3px solid rgba(0, 0, 0, .2)',
    background: 'transparent',
    lineHeight: 1.2,
    textAlign: 'center',
    userSelect: 'none',
    cursor: 'pointer',
    transition: 'all 200ms ease',
    borderLeft: 0,
    borderTop: 0,
    borderRight: 0,
    boxShadow: '0 1px 2px rgba(0, 0, 0, .1)',
    defaultBorder: color(
      `${baseTheme.defaultBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    primaryBorder: color(
      `${baseTheme.primaryBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    successBorder: color(
      `${baseTheme.successBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    warningBorder: color(
      `${baseTheme.warningBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    dangerBorder: color(
      `${baseTheme.dangerBackground}  lightness(${baseTheme.colorOffsetDark})`
    ),
    disabledBorder: color(
      `${baseTheme.disabledBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    defaultColor: baseTheme.colorWhite,
    primaryColor: baseTheme.colorWhite,
    successColor: baseTheme.colorWhite,
    warningColor: baseTheme.colorWhite,
    dangerColor: baseTheme.colorWhite,
    disabledColor: color(`${baseTheme.disabledBackground} lightness(30%)`),
    defaultHoverBackground: color(
      `${baseTheme.defaultBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    primaryHoverBackground: color(
      `${baseTheme.primaryBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    successHoverBackground: color(
      `${baseTheme.successBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    warningHoverBackground: color(
      `${baseTheme.warningBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    dangerHoverBackground: color(
      `${baseTheme.dangerBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    defaultHoverColor: baseTheme.colorWhite,
    primaryHoverColor: baseTheme.colorWhite,
    successHoverColor: baseTheme.colorWhite,
    warningHoverColor: baseTheme.colorWhite,
    dangerHoverColor: baseTheme.colorWhite
  };
};
