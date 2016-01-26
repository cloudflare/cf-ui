import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Button from '../src/Button';

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
