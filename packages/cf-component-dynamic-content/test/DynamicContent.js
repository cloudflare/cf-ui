const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const DynamicContent = require('../src/DynamicContent');

describe('DynamicContent', function() {
  it('should render', function() {
    assertEqualJSX(
      <DynamicContent dangerouslySetInnerHTML={{ __html: '<p>Hello World</p>' }}/>,
      // should equal
      <div className="cf-dynamic-content">
        <p>Hello World</p>
      </div>
    );
  });
});
