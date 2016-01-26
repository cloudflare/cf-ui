import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Callout from '../src/Callout';

describe('Callout', function() {
  it('should render "default" by default', function() {
    assertEqualJSX(
      <Callout title="Hello" content="World"/>,
      // should equal
      <div className="cf-callout cf-callout--default">
        <h3 className="cf-callout__heading">Hello</h3>
        <p className="cf-callout__content">World</p>
      </div>
    );
  });

  it('should render "type"', function() {
    assertEqualJSX(
      <Callout type="info" title="Hello" content="World"/>,
      // should equal
      <div className="cf-callout cf-callout--info">
        <h3 className="cf-callout__heading">Hello</h3>
        <p className="cf-callout__content">World</p>
      </div>
    );
  });
});
