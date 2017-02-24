const { equal: assertEqual } = require('assert');
const buildMediaQuery = require('../src/buildMediaQuery');

describe('buildMediaQuery', function() {
  it('should build minWidth query', function() {
    assertEqual(buildMediaQuery({ minWidth: '10em' }), '(min-width: 10em)');
  });

  it('should build maxWidth query', function() {
    assertEqual(buildMediaQuery({ maxWidth: '20em' }), '(max-width: 20em)');
  });

  it('should build minWidth/maxWidth query', function() {
    assertEqual(
      buildMediaQuery({ minWidth: '10em', maxWidth: '20em' }),
      '(min-width: 10em) and (max-width: 20em)'
    );
  });

  it('should build minWidth/not query', function() {
    assertEqual(
      buildMediaQuery({ minWidth: '10em' }, true),
      'not all and (min-width: 10em)'
    );
  });

  it('should build maxWidth/not query', function() {
    assertEqual(
      buildMediaQuery({ maxWidth: '20em' }, true),
      'not all and (max-width: 20em)'
    );
  });

  it('should build minWidth/maxWidth/not query', function() {
    assertEqual(
      buildMediaQuery({ minWidth: '10em', maxWidth: '20em' }, true),
      'not all and (min-width: 10em) and (max-width: 20em)'
    );
  });
});
