const debug = require('debug');

function createLogger(name) {
  const logger = debug(name);

  return function(message) {
    logger(message);
  };
}

module.exports = createLogger;
