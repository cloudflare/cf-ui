// @flow

const debug = require('debug');

function createLogger(name: string): (message: string) => void {
  const logger = debug(name);

  return function(message) {
    logger(message);
  };
}

module.exports = createLogger;
