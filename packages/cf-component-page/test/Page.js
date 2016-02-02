const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const Page = require('../src/Page');

describe('Page', function() {
  it('should render', function() {
    assertEqualJSX(
      <Page>Hello World</Page>,
      // should equal
      <article className="cf-page">Hello World</article>
    );
  });
});
