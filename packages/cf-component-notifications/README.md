# cf-component-notifications

> Cloudflare Notifications Component

## Installation

```sh
$ npm install cf-component-notifications
```

## Usage

```jsx
import React from 'react';
import {
  NotificationList,
  Notification,
  NotificationGlobalContainer
} from 'cf-component-notifications';
import { Button as ButtonUnstyled, ButtonTheme } from 'cf-component-button';
import { applyTheme } from 'cf-style-container';

const Button = applyTheme(ButtonUnstyled, ButtonTheme);

let UNIQUE_ID = 0;

class NofiticationsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    };
  }

  handleAdd(type, persist, delay) {
    const id = UNIQUE_ID++;

    this.setState({
      notifications: this.state.notifications.concat({
        id: id,
        type: type,
        message: 'Item ' + id,
        persist: persist,
        delay: delay
      })
    });
  }

  handleClear() {
    this.setState({
      notifications: []
    });
  }

  handleClose(id) {
    this.setState({
      notifications: this.state.notifications.filter(n => n.id !== id)
    });
  }

  render() {
    const notifications = this.state.notifications
      .map(n => {
        return (
          <Notification
            key={n.id}
            type={n.type}
            message={n.message}
            persist={n.persist}
            delay={n.delay}
            onClose={this.handleClose.bind(this, n.id)}
          />
        );
      })
      .reverse();

    return (
      <div>
        <Button
          type="danger"
          onClick={this.handleAdd.bind(this, 'error', false, 4000)}
        >
          Add Error Notification
        </Button>
        <Button
          type="warning"
          onClick={this.handleAdd.bind(this, 'warning', false, 4000)}
        >
          Add Warning Notification
        </Button>
        <Button
          type="success"
          onClick={this.handleAdd.bind(this, 'success', false, 4000)}
        >
          Add Success Notification
        </Button>
        <Button
          type="primary"
          onClick={this.handleAdd.bind(this, 'info', false, 4000)}
        >
          Add Info Notification
        </Button>

        <Button
          type="primary"
          onClick={this.handleAdd.bind(this, 'info', false, 10000)}
        >
          Add 10000ms Notification
        </Button>
        <Button
          type="primary"
          onClick={this.handleAdd.bind(this, 'info', true, null)}
        >
          Add Persistant Notification
        </Button>

        <Button type="default" onClick={this.handleClear.bind(this)}>
          Clear Notifications
        </Button>

        <NotificationGlobalContainer>
          <NotificationList>
            {notifications}
          </NotificationList>
        </NotificationGlobalContainer>
      </div>
    );
  }
}

export default NofiticationsComponent;
```

### :rotating_light: const ant! :rotating_light:

When passing a `key` to `<Notification/>` above, note that this must be a unique
id that does not change in between renders. Do not use the index of the `map`
function.

### `<Notification/>`

**Props**

| Name | Type | Description |
| --- | --- | --- |
| `type` | `String` | `"success"`, `"error"`, `"info"`, or `"warning"`. Required. |
| `message` | `String` | A message to display in the notification. |
| `onClose` | `Function` | Callback to call when the notification wants to be closed. |
| `closable` | `Boolean` | Should the notification have a close button. Optional, defaults to `true`. |
| `delay` | `Number` | Close after `x` milliseconds. Optional, defaults to `4000`. |
| `persist` | `Boolean` | Should the notification never close automatically? Optional, defaults to `false`. |

### `<NotificationList/>`

Container for `<Notification/>`s.

### `<NotificationGlobalContainer/>`

Container for `<NotificationList/>` for global notifications. See `example/`.
