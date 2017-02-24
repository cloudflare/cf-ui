const { equal: assertEqual } = require('assert');
const markdown = require('../src/markdown');

describe('renderMarkdown', function() {
  it('should render markdown', function() {
    assertEqual(
      markdown('# Hello World'),
      '<h1 id="hello-world">Hello World</h1>\n'
    );
  });

  it('should allow you to dangerously override sanitization', function() {
    assertEqual(
      markdown('<h1>Hello World</h1>', {
        __dangerouslyDontSanitizeMarkdown: true
      }),
      '<h1>Hello World</h1>'
    );
  });

  it('should not memoize when options are being passed', function() {
    var str = '<div></div>';
    assertEqual(markdown(str), '<p>&lt;div&gt;&lt;/div&gt;</p>\n');
    assertEqual(
      markdown(str, {
        __dangerouslyDontSanitizeMarkdown: true
      }),
      str
    );
  });
});
