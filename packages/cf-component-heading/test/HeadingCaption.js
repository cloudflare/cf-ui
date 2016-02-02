const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const HeadingCaption = require('../src/HeadingCaption');

describe('HeadingCaption', function() {
  it('should render', function() {
    assertEqualJSX(
      <HeadingCaption>Heading Caption</HeadingCaption>,
      // should equal
      <small className="cf-heading__caption">Heading Caption</small>
    );
  });
});
