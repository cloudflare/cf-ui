import cssColorFunction from 'css-color-function';

const color = input => cssColorFunction.convert(`color(${input})`);

const t = {};

// Typography
t.fontSize = '15px';
t.inputFontSize = '13px';
t.lineHeight = 1.5;
t.inputLineHeight = 1.4;
t.em = '1em';
t.rem = '1rem';
t.fontFamily = 'inherit';

//Font Weights
t.weightLight = 300;
t.weightNormal = 400;
t.weightSemiBold = 600;
t.weightBold = 700;

t.fontWeight = t.weightNormal;

// Misc
t.borderRadius = '2px';
t.arrowSize = '5px';

// Colors
t.colorWhite = 'white';

t.colorOffsetLight = '+15%';
t.colorOffsetDark = '-7%';

t.defaultBackground = 'gray';
t.primaryBackground = '#00a9eb';
t.successBackground = '#68970f';
t.warningBackground = '#fca520';
t.dangerBackground = '#ff3100';
t.disabledBackground = '#ededed';

export default t;
