const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const CardContent = require('../src/CardContent');

describe('CardContent', function() {
  it('should render without footer', function() {
    assertEqualJSX(
      <CardContent title="Title">CardContent</CardContent>,
      // should equal
      <div className="cf-card__content">
        <h3 className="cf-card__title">Title</h3>
        CardContent
      </div>
    );
  });

  it('should render with footer', function() {
    assertEqualJSX(
      <CardContent title="Title" footer="I am Footer">CardContent</CardContent>,
      // should equal
      <div className="cf-card__content">
        <h3 className="cf-card__title">Title</h3>
        CardContent
        <div className="cf-card__footer">
          I am Footer
        </div>
      </div>
    );
  });
});
