import {equal as assertEqual} from 'assert';
import createLogger from '../src/createLogger';

describe('createLogger', function() {
  it('should create a logging function', function() {
    const logger = createLogger('name');

    logger('One');
    logger('Two');
  });
});
