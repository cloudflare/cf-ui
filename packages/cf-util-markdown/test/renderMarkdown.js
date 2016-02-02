const {equal: assertEqual} = require('assert');
const renderMarkdown = require('../src/renderMarkdown');

describe('renderMarkdown', function() {
  it('should render markdown', function() {
    assertEqual(
      renderMarkdown('# Hello World'),
      '<h1 id="hello-world">Hello World</h1>\n'
    );
  });

  it('should allow you to dangerously override sanitization', function() {
    assertEqual(
      renderMarkdown('<h1>Hello World</h1>', {
        __dangerouslyDontSanitizeMarkdown: true
      }),
      '<h1>Hello World</h1>'
    );
  });
});
