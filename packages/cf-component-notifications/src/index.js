import NotificationUnstyled from './Notification';
import NotificationListUnstyled from './NotificationList';
import NotificationGlobalContainerUnstyled from './NotificationGlobalContainer';

import NotificationTheme from './NotificationTheme';
import NotificationListTheme from './NotificationListTheme';
import NotificationGlobalContainerTheme
  from './NotificationGlobalContainerTheme';

import { applyTheme } from 'cf-style-container';

const Notification = applyTheme(NotificationUnstyled, NotificationTheme);

const NotificationList = applyTheme(
  NotificationListUnstyled,
  NotificationListTheme
);

const NotificationGlobalContainer = applyTheme(
  NotificationGlobalContainerUnstyled,
  NotificationGlobalContainerTheme
);

export {
  Notification,
  NotificationList,
  NotificationGlobalContainer,
  NotificationUnstyled,
  NotificationListUnstyled,
  NotificationGlobalContainerUnstyled,
  NotificationTheme,
  NotificationListTheme,
  NotificationGlobalContainerTheme
};
