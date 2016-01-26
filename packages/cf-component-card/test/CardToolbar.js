import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import CardToolbar from '../src/CardToolbar';

describe('CardToolbar', function() {
  it('should render', function() {
    assertEqualJSX(
      <CardToolbar
        controls={"Controls"}
        links={"Links"}/>,
      // should equal
      <div className="cf-card__toolbar">
        <div className="cf-card__toolbar_controls">
          Controls
        </div>
        <div className="cf-card__toolbar_links" role="tablist">
          Links
        </div>
      </div>
    );
  });
});
