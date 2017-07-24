global.console.warn = warning => {
  throw new Error(warning);
};

global.console.error = error => {
  throw new Error(error);
};

global.console.trace = () => {
  throw new Error("Please don't call console.trace in the codebase");
};

global.console.log = () => {
  throw new Error("Please don't call console.log in the codebase");
};
