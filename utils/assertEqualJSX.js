const {renderToStaticMarkup} = require('react-dom/server');
const {html: beautifyHTML} = require('js-beautify');
const {diffWords} = require('diff');
const chalk = require('chalk');
const {fail} = require('assert');

const colors = new chalk.constructor({
  enabled: !!global.top.karma
});

function assertEqualJSX(actual, expected, opts = {}) {
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

module.exports = assertEqualJSX;
