import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import NotificationList from '../src/NotificationList';

describe('NotificationList', function() {
  it('should render', function() {
    assertEqualJSX(
      <NotificationList>NotificationList</NotificationList>,
      // should equal
      <div className="cf-notifications">NotificationList</div>
    );
  });
});
