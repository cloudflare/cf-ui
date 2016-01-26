import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import HeadingCaption from '../src/HeadingCaption';

describe('HeadingCaption', function() {
  it('should render', function() {
    assertEqualJSX(
      <HeadingCaption>Heading Caption</HeadingCaption>,
      // should equal
      <small className="cf-heading__caption">Heading Caption</small>
    );
  });
});
