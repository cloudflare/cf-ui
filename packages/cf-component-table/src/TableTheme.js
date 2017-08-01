import { darken } from 'polished';

export default baseTheme => {
  const tableInfoColor = baseTheme.colorBlueLight;
  const tableSuccessColor = baseTheme.colorGreenLight;
  const tableErrorColor = baseTheme.colorRedLight;
  const tableWarningColor = baseTheme.colorYellowLight;

  return {
    tableBorderColor: baseTheme.colorGrayLight,
    tablePadding: '0.73333333333rem',
    tableHeadBackground: baseTheme.colorGrayLight,
    tableHeadFontWeight: baseTheme.weightSemiBold,
    tableCondensedPadding: '0.366666666667rem 0.866666666665rem',
    tableInfoColor,
    tableSuccessColor,
    tableErrorColor,
    tableWarningColor,
    tableInfoBorderColor: darken(0.05, tableInfoColor),
    tableSuccessBorderColor: darken(0.05, tableSuccessColor),
    tableErrorBorderColor: darken(0.05, tableErrorColor),
    tableWarningBorderColor: darken(0.05, tableWarningColor),
    tableStripedDefaultColor: darken(0.02, baseTheme.colorWhite),
    tableStripedInfoColor: darken(0.02, tableInfoColor),
    tableStripedSuccessColor: darken(0.02, tableSuccessColor),
    tableStripedErrorColor: darken(0.02, tableErrorColor),
    tableStripedWarningColor: darken(0.02, tableWarningColor),
    tableHoverDefaultColor: darken(0.06, baseTheme.colorWhite),
    tableHoverInfoColor: darken(0.02, tableInfoColor),
    tableHoverSuccessColor: darken(0.02, tableSuccessColor),
    tableHoverErrorColor: darken(0.02, tableErrorColor),
    tableHoverWarningColor: darken(0.02, tableWarningColor)
  };
};
