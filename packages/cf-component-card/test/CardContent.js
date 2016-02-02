const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const CardContent = require('../src/CardContent');

describe('CardContent', function() {
  it('should render', function() {
    assertEqualJSX(
      <CardContent title="Title">CardContent</CardContent>,
      // should equal
      <div className="cf-card__content">
        <h3 className="cf-card__title">Title</h3>
        CardContent
      </div>
    );
  });
});
