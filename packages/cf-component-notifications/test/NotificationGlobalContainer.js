const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const NotificationGlobalContainer = require('../src/NotificationGlobalContainer');

describe('NotificationGlobalContainer', function() {
  it('should render', function() {
    assertEqualJSX(
      <NotificationGlobalContainer>NotificationGlobalContainer</NotificationGlobalContainer>,
      // should equal
      <div className="cf-notifications__global_container">NotificationGlobalContainer</div>
    );
  });
});
