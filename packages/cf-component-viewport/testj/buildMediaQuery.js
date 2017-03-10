import buildMediaQuery from '../src/buildMediaQuery';

test('should build minWidth query', () => {
  expect(buildMediaQuery({ minWidth: '10em' })).toEqual('(min-width: 10em)');
});

test('should build maxWidth query', () => {
  expect(buildMediaQuery({ maxWidth: '20em' })).toEqual('(max-width: 20em)');
});

test('should build minWidth/maxWidth query', () => {
  expect(buildMediaQuery({ minWidth: '10em', maxWidth: '20em' })).toEqual(
    '(min-width: 10em) and (max-width: 20em)'
  );
});

test('should build minWidth/not query', () => {
  expect(buildMediaQuery({ minWidth: '10em' }, true)).toEqual(
    'not all and (min-width: 10em)'
  );
});

test('should build maxWidth/not query', () => {
  expect(buildMediaQuery({ maxWidth: '20em' }, true)).toEqual(
    'not all and (max-width: 20em)'
  );
});

test('should build minWidth/maxWidth/not query', () => {
  expect(buildMediaQuery({ minWidth: '10em', maxWidth: '20em' }, true)).toEqual(
    'not all and (min-width: 10em) and (max-width: 20em)'
  );
});
