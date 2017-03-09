import variables from './variables';

const checkBaseTheme = (baseTheme, name) => {
  if (!baseTheme) {
    throw Error(
      `
      You can't use ${name} without providing global theme from
      cf-style-consts. You should wrap your app by <ThemeProvider />!
    `
    );
  }
};

export { variables, checkBaseTheme };
