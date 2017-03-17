import React from 'react';
import renderer from 'react-test-renderer';
import {
  NotificationGlobalContainer
} from '../../cf-component-notifications/src/index';

test('should render', () => {
  const component = renderer.create(
    <NotificationGlobalContainer>
      NotificationGlobalContainer
    </NotificationGlobalContainer>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
