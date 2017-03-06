import marked from 'marked';
import memoize from 'lodash.memoize';

// Setup default options.
marked.setOptions({
  gfm: true,
  tables: false,
  breaks: true,
  smartypants: true,

  // Never turn this to `false` or you are fired.
  sanitize: true
});

const memoizedMarked = memoize(marked);

/**
 * Render a markdown string as html.
 * @param {String} str
 * @param {Object} [opts]
 * @param {Boolean} [opts.__dangerouslyDontSanitizeMarkdown]
 * @return {String} Rendered markdown.
 */
function markdown(str, opts) {
  const markedOpts = {};

  if (opts && opts.__dangerouslyDontSanitizeMarkdown) {
    markedOpts.sanitize = false;
  }

  return opts ? marked(str, markedOpts) : memoizedMarked(str);
}

export default markdown;
