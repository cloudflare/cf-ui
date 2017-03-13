import markdown from 'cf-util-markdown';

test('should render markdown', () => {
  expect(markdown('# Hello World')).toBe(
    '<h1 id="hello-world">Hello World</h1>\n'
  );
});

test('should allow you to dangerously override sanitization', () => {
  expect(
    markdown('<h1>Hello World</h1>', {
      __dangerouslyDontSanitizeMarkdown: true
    })
  ).toBe('<h1>Hello World</h1>');
});

test('should not memoize when options are being passed', () => {
  var str = '<div></div>';
  expect(markdown(str)).toBe('<p>&lt;div&gt;&lt;/div&gt;</p>\n');
  expect(
    markdown(str, {
      __dangerouslyDontSanitizeMarkdown: true
    })
  ).toBe(str);
});
