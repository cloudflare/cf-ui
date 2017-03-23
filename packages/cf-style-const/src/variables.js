import { color } from 'cf-style-container';

const colorOffsetLight = '+15%';
const colorOffsetDark = '-7%';

export default {
  fontSize: '15px',
  inputFontSize: '13px',
  lineHeight: 1.5,
  inputLineHeight: 1.4,
  em: '1em',
  rem: '1rem',
  fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
  weightLight: 300,
  weightNormal: 400,
  weightSemiBold: 600,
  weightBold: 700,
  fontWeight: 400,
  fontColorHeadingCaption: '#888',
  borderRadius: '2px',
  arrowSize: '5px',
  disabledBackground: '#ededed',
  bodyBackground: '#ebebeb',
  bodyAccentColor: color('white lightness(-80%)'),
  bodyOffsetColor: color('white lightness(-53%)'),
  fontColor: color('white lightness(-80%)'),
  colorWhite: 'white',
  colorBlack: 'black',
  colorOffsetLight,
  colorOffsetDark,
  colorInfo: '#00a9eb',
  colorSuccess: '#68970f',
  colorWarning: '#fca520',
  colorError: '#ff3100',
  colorMuted: color('white lightness(-51.25%)'),
  colorSmoke: '#f2f2f2',
  colorBlue: '#2f7bbf',
  colorBlueLight: color(`#2f7bbf lightness(${colorOffsetLight})`),
  colorBlueDark: color(`#2f7bbf lightness(${colorOffsetDark})`),
  colorOrange: '#ff7900',
  colorOrangeLight: color(`#ff7900 lightness(${colorOffsetLight})`),
  colorOrangeDark: color(`#ff7900 lightness(${colorOffsetDark})`),
  colorGray: color('white lightness(-51.25%)'),
  colorGrayLight: color('white lightness(-13%)'),
  colorGrayDark: color('white lightness(-80%)'),
  colorGreen: '#9bca3e',
  colorGreenLight: color(`#9bca3e lightness(${colorOffsetLight})`),
  colorGreenDark: color(`#9bca3e lightness(${colorOffsetDark})`),
  colorRed: '#bd2527',
  colorRedLight: color(`#bd2527 lightness(${colorOffsetLight})`),
  colorRedDark: color(`#bd2527 lightness(${colorOffsetDark})`),
  colorYellow: '#ffd24d',
  colorYellowLight: color(`#ffd24d lightness(${colorOffsetLight})`),
  colorYellowDark: color(`#ffd24d lightness(${colorOffsetDark})`),
  colorPink: '#d91698',
  colorPinkLight: color(`#d91698 lightness(${colorOffsetLight})`),
  colorPinkDark: color(`#d91698 lightness(${colorOffsetDark})`),
  colorPurple: '#9545e5',
  colorPurpleLight: color(`#d91698 lightness(${colorOffsetLight})`),
  colorPurpleDark: color(`#d91698 lightness(${colorOffsetDark})`),
  colorTwitterBlue: '#00aced',
  colorFacebookBlue: '#3b5998'
};
