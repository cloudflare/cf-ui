// @flow

const marked = require('marked');
const memoize = require('lodash.memoize');

type MarkdownOptions = {
  __dangerouslyDontSanitizeMarkdown?: true
};

// Setup default options.
marked.setOptions({
  gfm: true,
  tables: false,
  breaks: true,
  smartypants: true,

  // Never turn this to `false` or you are fired.
  sanitize: true
});

const memoizedMarked: (md: string) => string = memoize(marked);

/**
 * Render a markdown string as html.
 * @param {String} str
 * @param {Object} [opts]
 * @param {Boolean} [opts.__dangerouslyDontSanitizeMarkdown]
 * @return {String} Rendered markdown.
 */
function markdown(str: string, opts?: MarkdownOptions) {
  const markedOpts = {};

  if (opts && opts.__dangerouslyDontSanitizeMarkdown) {
    markedOpts.sanitize = false;
  }

  return opts ? marked(str, markedOpts) : memoizedMarked(str);
}

module.exports = markdown;
