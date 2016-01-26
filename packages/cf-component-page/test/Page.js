import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Page from '../src/Page';

describe('Page', function() {
  it('should render', function() {
    assertEqualJSX(
      <Page>Hello World</Page>,
      // should equal
      <article className="cf-page">Hello World</article>
    );
  });
});
