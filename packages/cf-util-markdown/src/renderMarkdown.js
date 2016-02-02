const marked = require('marked');

// Setup default options.
marked.setOptions({
  gfm: true,
  tables: false,
  breaks: true,
  smartypants: true,

  // Never turn this to `false` or you are fired.
  sanitize: true
});

/**
 * Render a markdown string as html.
 * @param {String} str
 * @param {Object} [opts]
 * @param {Boolean} [opts.__dangerouslyDontSanitizeMarkdown]
 * @return {String} Rendered markdown.
 */
function renderMarkdown(str, opts) {
  const markedOpts = {};

  if (opts && opts.__dangerouslyDontSanitizeMarkdown) {
    markedOpts.sanitize = false;
  }

  return marked(str, markedOpts);
}

module.exports = renderMarkdown;
