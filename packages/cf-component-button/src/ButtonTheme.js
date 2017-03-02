import cssColorFunction from 'css-color-function';

const color = input => cssColorFunction.convert(`color(${input})`);

export default baseTheme => {
  const t = {};

  // main settings
  t.fontSize = `${(parseFloat(baseTheme.fontSize) - 1) / parseFloat(baseTheme.fontSize)}rem`;
  t.paddingTop = '0.7em';
  t.paddingRight = '1em';
  t.paddingBottom = '0.4em';
  t.paddingLeft = '1em';
  t.spacing = '0.4rem';
  t.display = 'inline-block';
  t.position = 'relative';
  t.marginTop = 0;
  t.marginBottom = 0;
  t.marginLeft = 0;
  t.marginRight = 0;
  t.border = 'none';
  t.borderBottom = '3px solid rgba(0, 0, 0, .2)';
  t.background = 'transparent';
  t.lineHeight = 1.2;
  t.textAlign = 'center';
  t.userSelect = 'none';
  t.cursor = 'pointer';
  t.transition = 'all 200ms ease';
  t.borderLeft = 0;
  t.borderTop = 0;
  t.borderRight = 0;
  t.boxShadow = '0 1px 2px rgba(0, 0, 0, .1)';

  // colors
  t.defaultBorder = color(
    `${baseTheme.defaultBackground} lightness(${baseTheme.colorOffsetDark})`
  );
  t.primaryBorder = color(
    `${baseTheme.primaryBackground} lightness(${baseTheme.colorOffsetDark})`
  );
  t.successBorder = color(
    `${baseTheme.successBackground} lightness(${baseTheme.colorOffsetDark})`
  );
  t.warningBorder = color(
    `${baseTheme.warningBackground} lightness(${baseTheme.colorOffsetDark})`
  );
  t.dangerBorder = color(
    `${baseTheme.dangerBackground}  lightness(${baseTheme.colorOffsetDark})`
  );
  t.disabledBorder = color(
    `${baseTheme.disabledBackground} lightness(${baseTheme.colorOffsetDark})`
  );

  t.defaultColor = baseTheme.colorWhite;
  t.primaryColor = baseTheme.colorWhite;
  t.successColor = baseTheme.colorWhite;
  t.warningColor = baseTheme.colorWhite;
  t.dangerColor = baseTheme.colorWhite;
  t.disabledColor = color(`${baseTheme.disabledBackground} lightness(30%)`);

  // hover
  t.defaultHoverBackground = color(
    `${baseTheme.defaultBackground} lightness(${baseTheme.colorOffsetDark})`
  );
  t.primaryHoverBackground = color(
    `${baseTheme.primaryBackground} lightness(${baseTheme.colorOffsetDark})`
  );
  t.successHoverBackground = color(
    `${baseTheme.successBackground} lightness(${baseTheme.colorOffsetDark})`
  );
  t.warningHoverBackground = color(
    `${baseTheme.warningBackground} lightness(${baseTheme.colorOffsetDark})`
  );
  t.dangerHoverBackground = color(
    `${baseTheme.dangerBackground} lightness(${baseTheme.colorOffsetDark})`
  );

  // hover colors
  t.defaultHoverColor = t.defaultColor;
  t.primaryHoverColor = t.primaryColor;
  t.successHoverColor = t.successColor;
  t.warningHoverColor = t.warningColor;
  t.dangerHoverColor = t.dangerColor;
  return t;
};
