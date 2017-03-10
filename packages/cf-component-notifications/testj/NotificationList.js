import React from 'react';
import renderer from 'react-test-renderer';
import { NotificationList } from 'cf-component-notifications';

test('should render', () => {
  const component = renderer.create(
    <NotificationList>NotificationList</NotificationList>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
