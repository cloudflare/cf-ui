const {equal: assertEqual} = require('assert');
const createLogger = require('../src/createLogger');

describe('createLogger', function() {
  it('should create a logging function', function() {
    const logger = createLogger('name');

    logger('One');
    logger('Two');
  });
});
