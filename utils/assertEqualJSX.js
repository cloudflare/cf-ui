import {renderToStaticMarkup} from 'react-dom/server';
import {html as beautifyHTML} from 'js-beautify';
import {diffWords} from 'diff';
import chalk from 'chalk';
import {fail} from 'assert';

const colors = new chalk.constructor({
  enabled: !!global.top.karma
});

export default function assertEqualJSX(actual, expected, opts = {}) {
  actual = renderToStaticMarkup(actual);
  expected = renderToStaticMarkup(expected);

  if (opts.sanitize) {
    actual = opts.sanitize(actual);
    expected = opts.sanitize(expected);
  }

  if (actual === expected) {
    return;
  }

  actual = beautifyHTML(actual);
  expected = beautifyHTML(expected);

  const diff = diffWords(actual, expected)
    .map((part) => {
      if (part.added) {
        return colors.black.bgRed(part.value);
      } else if (part.removed) {
        return colors.black.bgGreen(part.value);
      } else {
        return colors.gray(part.value);
      }
    })
    .join('');

  const message = [
    '',
    '-------------------------------------------------------------------------',
    '',
    colors.gray('Diff:'),
    diff,
    '',
    colors.green('Actual:'),
    colors.green(actual),
    '',
    colors.red('Expected:'),
    colors.red(expected),
    '',
    '-------------------------------------------------------------------------',
  ].join('\n');

  fail(actual, expected, message, '==');
}
