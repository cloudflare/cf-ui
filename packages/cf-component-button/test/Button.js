const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const Button = require('../src/Button');

describe('Button', function() {
  it('should render with type', function() {
    assertEqualJSX(
      <Button type="primary" onClick={() => {}}>Button</Button>,
      // should equal
      <button className="cf-btn cf-btn--primary">Button</button>
    );
  });

  it('should render with type/disabled', function() {
    assertEqualJSX(
      <Button type="primary" disabled onClick={() => {}}>Button</Button>,
      // should equal
      <button className="cf-btn cf-btn--primary" disabled>Button</button>
    );
  });
});
