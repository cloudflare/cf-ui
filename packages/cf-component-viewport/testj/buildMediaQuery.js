import { equal as assertEqual } from 'assert';
import buildMediaQuery from '../src/buildMediaQuery';

describe('buildMediaQuery', () => {
  test('should build minWidth query', () => {
    assertEqual(buildMediaQuery({ minWidth: '10em' }), '(min-width: 10em)');
  });

  test('should build maxWidth query', () => {
    assertEqual(buildMediaQuery({ maxWidth: '20em' }), '(max-width: 20em)');
  });

  test('should build minWidth/maxWidth query', () => {
    assertEqual(
      buildMediaQuery({ minWidth: '10em', maxWidth: '20em' }),
      '(min-width: 10em) and (max-width: 20em)'
    );
  });

  test('should build minWidth/not query', () => {
    assertEqual(
      buildMediaQuery({ minWidth: '10em' }, true),
      'not all and (min-width: 10em)'
    );
  });

  test('should build maxWidth/not query', () => {
    assertEqual(
      buildMediaQuery({ maxWidth: '20em' }, true),
      'not all and (max-width: 20em)'
    );
  });

  test('should build minWidth/maxWidth/not query', () => {
    assertEqual(
      buildMediaQuery({ minWidth: '10em', maxWidth: '20em' }, true),
      'not all and (min-width: 10em) and (max-width: 20em)'
    );
  });
});
