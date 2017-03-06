import debug from 'debug';

export default function createLogger(name) {
  const logger = debug(name);

  return function(message) {
    logger(message);
  };
}
