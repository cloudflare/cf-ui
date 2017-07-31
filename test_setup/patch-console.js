global.console.warn = warning => {
  throw new Error(warning);
};

global.console.error = error => {
  throw new Error(error);
};

global.console.trace = () => {
  throw new Error("Please don't call console.trace in the codebase");
};

const log = global.console.log;
global.console.log = message => {
  log(message);
  throw new Error("Please don't call console.log in the codebase");
};
