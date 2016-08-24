const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const CardContent = require('../src/CardContent');

describe('CardContent', function() {
  it('should render without footer message', function() {
    assertEqualJSX(
      <CardContent title="Title">CardContent</CardContent>,
      // should equal
      <div className="cf-card__content">
        <h3 className="cf-card__title">Title</h3>
        CardContent
      </div>
    );
  });

  it('should render with footer message', function() {
    assertEqualJSX(
      <CardContent title="Title" footerMessage="Footer Message">CardContent</CardContent>,
      // should equal
      <div className="cf-card__content">
        <h3 className="cf-card__title">Title</h3>
        CardContent
        <div className="cf-card__footer_message">
          <div className="cf-text--small cf-text--muted">Footer Message</div>
        </div>
      </div>
    );
  });
});
