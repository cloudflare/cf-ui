const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const CardToolbar = require('../src/CardToolbar');

describe('CardToolbar', function() {
  it('should render', function() {
    assertEqualJSX(
      <CardToolbar controls={'Controls'} links={'Links'} />,
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
