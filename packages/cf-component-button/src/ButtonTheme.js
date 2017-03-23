import { color } from 'cf-style-container';
import { checkBaseTheme } from 'cf-style-const';

export default baseTheme => {
  checkBaseTheme(baseTheme, 'ButtonTheme');
  const defaultBorder = color(
    `${baseTheme.colorGrayLight} lightness(${baseTheme.colorOffsetDark})`
  );
  const primaryBorder = color(
    `${baseTheme.colorBlue} lightness(${baseTheme.colorOffsetDark})`
  );
  const successBorder = color(
    `${baseTheme.colorGreen} lightness(${baseTheme.colorOffsetDark})`
  );
  const warningBorder = color(
    `${baseTheme.colorOrange} lightness(${baseTheme.colorOffsetDark})`
  );
  const dangerBorder = color(
    `${baseTheme.colorRed}  lightness(${baseTheme.colorOffsetDark})`
  );
  const defaultHoverBackground = color(
    `${baseTheme.colorGrayLight} lightness(${baseTheme.colorOffsetDark})`
  );
  const defaultActiveBackground = color(
    `${defaultHoverBackground} lightness(${baseTheme.colorOffsetDark})`
  );
  const primaryActiveBackground = color(
    `${baseTheme.colorBlueDark} lightness(${baseTheme.colorOffsetDark})`
  );
  const successActiveBackground = color(
    `${baseTheme.colorGreenDark} lightness(${baseTheme.colorOffsetDark})`
  );
  const warningActiveBackground = color(
    `${baseTheme.colorOrangeDark} lightness(${baseTheme.colorOffsetDark})`
  );
  const dangerActiveBackground = color(
    `${baseTheme.colorRedDark} lightness(${baseTheme.colorOffsetDark})`
  );

  return {
    fontSize: `${(parseFloat(baseTheme.fontSize) - 1) / parseFloat(baseTheme.fontSize)}rem`,
    fontWeight: baseTheme.weightNormal,
    paddingTop: '0.6em',
    paddingRight: '1em',
    paddingBottom: '0.53em',
    paddingLeft: '1em',
    spacing: '0.4rem',
    borderSize: '1px',
    display: 'inline-block',
    position: 'relative',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    background: 'transparent',
    lineHeight: 1.2,
    textAlign: 'center',
    webkitTextStroke: 0, // This makes white text in buttons hard to read, so removing it
    webkitFontSmoothing: 'subpixel-antialiased',
    userSelect: 'none',
    cursor: 'pointer',
    transition: 'all 200ms ease',
    border: 'none',
    borderLeft: 0,
    borderBottom: '1px solid',
    borderTop: 0,
    borderRight: 0,

    // Disabled
    disabledBorder: color(
      `${baseTheme.disabledBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    disabledColor: color(`${baseTheme.disabledBackground} lightness(30%)`),

    // Normal
    defaultBackground: baseTheme.colorGrayLight,
    primaryBackground: baseTheme.colorBlue,
    successBackground: baseTheme.colorGreen,
    warningBackground: baseTheme.colorOrange,
    dangerBackground: baseTheme.colorRed,

    defaultBorder,
    primaryBorder,
    successBorder,
    warningBorder,
    dangerBorder,

    defaultColor: baseTheme.colorGrayDark,
    primaryColor: baseTheme.colorWhite,
    successColor: baseTheme.colorWhite,
    warningColor: baseTheme.colorWhite,
    dangerColor: baseTheme.colorWhite,

    // Hover
    defaultHoverBackground,
    primaryHoverBackground: baseTheme.colorBlueDark,
    successHoverBackground: baseTheme.colorGreenDark,
    warningHoverBackground: baseTheme.colorOrangeDark,
    dangerHoverBackground: baseTheme.colorRedDark,

    defaultHoverBorder: color(
      `${defaultBorder} lightness(${baseTheme.colorOffsetDark})`
    ),
    primaryHoverBorder: color(
      `${primaryBorder} lightness(${baseTheme.colorOffsetDark})`
    ),
    successHoverBorder: color(
      `${baseTheme.colorGreenDark} lightness(${baseTheme.colorOffsetDark})`
    ),
    warningHoverBorder: color(
      `${baseTheme.colorOrangeDark} lightness(${baseTheme.colorOffsetDark})`
    ),
    dangerHoverBorder: color(
      `${baseTheme.colorRedDark}  lightness(${baseTheme.colorOffsetDark})`
    ),

    defaultHoverColor: baseTheme.colorGrayDark,
    primaryHoverColor: baseTheme.colorWhite,
    successHoverColor: baseTheme.colorWhite,
    warningHoverColor: baseTheme.colorWhite,
    dangerHoverColor: baseTheme.colorWhite,

    // Active
    defaultActiveBackground,
    primaryActiveBackground,
    successActiveBackground,
    warningActiveBackground,
    dangerActiveBackground,

    defaultActiveBorder: color(
      `${defaultActiveBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    primaryActiveBorder: color(
      `${primaryActiveBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    successActiveBorder: color(
      `${successActiveBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    warningActiveBorder: color(
      `${warningActiveBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    dangerActiveBorder: color(
      `${dangerActiveBackground}  lightness(${baseTheme.colorOffsetDark})`
    ),

    defaultActiveColor: baseTheme.colorGrayDark,
    primaryActiveColor: baseTheme.colorWhite,
    successActiveColor: baseTheme.colorWhite,
    warningActiveColor: baseTheme.colorWhite,
    dangerActiveColor: baseTheme.colorWhite,

    // Focus
    defaultFocusColor: baseTheme.colorGrayDark,
    primaryFocusColor: baseTheme.colorWhite,
    successFocusColor: baseTheme.colorWhite,
    warningFocusColor: baseTheme.colorWhite,
    dangerFocusColor: baseTheme.colorWhite,

    defaultFocusOutlineColor: color(
      `${defaultActiveBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    primaryFocusOutlineColor: color(
      `${primaryActiveBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    successFocusOutlineColor: color(
      `${successActiveBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    warningFocusOutlineColor: color(
      `${warningActiveBackground} lightness(${baseTheme.colorOffsetDark})`
    ),
    dangerFocusOutlineColor: color(
      `${dangerActiveBackground} lightness(${baseTheme.colorOffsetDark})`
    )
  };
};
