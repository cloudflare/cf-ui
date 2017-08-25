import { darken, lighten } from 'polished';

export default baseTheme => {
  const defaultBorder = darken(
    baseTheme.colorOffsetDark,
    baseTheme.colorGrayLight
  );
  const primaryBorder = darken(baseTheme.colorOffsetDark, baseTheme.colorBlue);
  const successBorder = darken(baseTheme.colorOffsetDark, baseTheme.colorGreen);
  const warningBorder = darken(
    baseTheme.colorOffsetDark,
    baseTheme.colorOrange
  );
  const dangerBorder = darken(baseTheme.colorOffsetDark, baseTheme.colorRed);

  const defaultHoverBackground = darken(
    baseTheme.colorOffsetDark,
    baseTheme.colorGrayLight
  );
  const defaultActiveBackground = darken(
    baseTheme.colorOffsetDark,
    defaultHoverBackground
  );
  const primaryActiveBackground = darken(
    baseTheme.colorOffsetDark,
    baseTheme.colorBlueDark
  );
  const successActiveBackground = darken(
    baseTheme.colorOffsetDark,
    baseTheme.colorGreenDark
  );
  const warningActiveBackground = darken(
    baseTheme.colorOffsetDark,
    baseTheme.colorOrangeDark
  );
  const dangerActiveBackground = darken(
    baseTheme.colorOffsetDark,
    baseTheme.colorRedDark
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
    maxWidth: 'initial',
    float: 'none',

    // Disabled
    disabledBorder: darken(
      baseTheme.colorOffsetDark,
      baseTheme.disabledBackground
    ),
    disabledColor: lighten(0.3, baseTheme.disabledBackground),

    // Normal
    defaultBackground: baseTheme.colorGrayLight,
    primaryBackground: baseTheme.colorBlue,
    successBackground: baseTheme.colorGreen,
    warningBackground: baseTheme.colorOrange,
    dangerBackground: baseTheme.colorRed,
    dangerOutlineBackground: 'transparent',

    defaultBorder,
    primaryBorder,
    successBorder,
    warningBorder,
    dangerBorder,
    dangerOutlineBorder: baseTheme.color.apple,

    defaultColor: baseTheme.colorGrayDark,
    primaryColor: baseTheme.colorWhite,
    successColor: baseTheme.colorWhite,
    warningColor: baseTheme.colorWhite,
    dangerColor: baseTheme.colorWhite,
    dangerOutlineColor: baseTheme.color.apple,

    // Hover
    defaultHoverBackground,
    primaryHoverBackground: baseTheme.colorBlueDark,
    successHoverBackground: baseTheme.colorGreenDark,
    warningHoverBackground: baseTheme.colorOrangeDark,
    dangerHoverBackground: baseTheme.colorRedDark,
    dangerOutlineHoverBackground: baseTheme.color.apple,

    defaultHoverBorder: darken(baseTheme.colorOffsetDark, defaultBorder),
    primaryHoverBorder: darken(baseTheme.colorOffsetDark, primaryBorder),
    successHoverBorder: darken(
      baseTheme.colorOffsetDark,
      baseTheme.colorGreenDark
    ),
    warningHoverBorder: darken(
      baseTheme.colorOffsetDark,
      baseTheme.colorOrangeDark
    ),
    dangerHoverBorder: darken(
      baseTheme.colorOffsetDark,
      baseTheme.colorRedDark
    ),
    dangerOutlineHoverBorder: baseTheme.color.cherry,

    defaultHoverColor: baseTheme.colorGrayDark,
    primaryHoverColor: baseTheme.colorWhite,
    successHoverColor: baseTheme.colorWhite,
    warningHoverColor: baseTheme.colorWhite,
    dangerHoverColor: baseTheme.colorWhite,
    dangerOutlineHoverColor: baseTheme.colorWhite,

    // Active
    defaultActiveBackground,
    primaryActiveBackground,
    successActiveBackground,
    warningActiveBackground,
    dangerActiveBackground,
    dangerOutlineActiveBackground: baseTheme.color.cherry,

    defaultActiveBorder: darken(
      baseTheme.colorOffsetDark,
      defaultActiveBackground
    ),
    primaryActiveBorder: darken(
      baseTheme.colorOffsetDark,
      primaryActiveBackground
    ),
    successActiveBorder: darken(
      baseTheme.colorOffsetDark,
      successActiveBackground
    ),
    warningActiveBorder: darken(
      baseTheme.colorOffsetDark,
      warningActiveBackground
    ),
    dangerActiveBorder: darken(
      baseTheme.colorOffsetDark,
      dangerActiveBackground
    ),
    dangerOutlineActiveBorder: baseTheme.color.cherry,

    defaultActiveColor: baseTheme.colorGrayDark,
    primaryActiveColor: baseTheme.colorWhite,
    successActiveColor: baseTheme.colorWhite,
    warningActiveColor: baseTheme.colorWhite,
    dangerActiveColor: baseTheme.colorWhite,
    dangerOutlineActiveColor: baseTheme.colorWhite,

    // Focus
    defaultFocusBackground: baseTheme.colorGrayLight,
    primaryFocusBackground: baseTheme.colorBlue,
    successFocusBackground: baseTheme.colorGreen,
    warningFocusBackground: baseTheme.colorOrange,
    dangerFocusBackground: baseTheme.colorRed,
    dangerOutlineFocusBackground: baseTheme.color.cherry,

    defaultFocusColor: baseTheme.colorGrayDark,
    primaryFocusColor: baseTheme.colorWhite,
    successFocusColor: baseTheme.colorWhite,
    warningFocusColor: baseTheme.colorWhite,
    dangerFocusColor: baseTheme.colorWhite,
    dangerOutlineFocusColor: baseTheme.colorWhite,

    defaultFocusOutlineColor: darken(
      baseTheme.colorOffsetDark,
      defaultActiveBackground
    ),
    primaryFocusOutlineColor: darken(
      baseTheme.colorOffsetDark,
      primaryActiveBackground
    ),
    successFocusOutlineColor: darken(
      baseTheme.colorOffsetDark,
      successActiveBackground
    ),
    warningFocusOutlineColor: darken(
      baseTheme.colorOffsetDark,
      warningActiveBackground
    ),
    dangerFocusOutlineColor: darken(
      baseTheme.colorOffsetDark,
      dangerActiveBackground
    ),
    dangerOutlineFocusOutlineColor: 'transparent'
  };
};
