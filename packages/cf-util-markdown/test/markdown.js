const {equal: assertEqual} = require('assert');
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
});
