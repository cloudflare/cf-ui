import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import NotificationGlobalContainer from '../src/NotificationGlobalContainer';

describe('NotificationGlobalContainer', function() {
  it('should render', function() {
    assertEqualJSX(
      <NotificationGlobalContainer>NotificationGlobalContainer</NotificationGlobalContainer>,
      // should equal
      <div className="cf-notifications__global_container">NotificationGlobalContainer</div>
    );
  });
});
