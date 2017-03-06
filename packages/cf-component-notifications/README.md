# cf-component-notifications

> Cloudflare Notifications Component

## Installation

```sh
$ npm install cf-component-notifications
```

## Usage

```js
const React = require('react');
const {NotificationList, Notification} = require('cf-component-notifications');

let UNIQUE_ID = 0;

class Application extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    };
  }

  handleAdd() {
    this.setState({
      notifications: this.state.notifications.concat({
        id: UNIQUE_ID++,
        message: 'A nice notification'
      })
    });
  }

  handleClose(id) {
    this.setState({
      notifications: this.state.notifications.filter(n => n.id !== id)
    });
  }

  render() {
    const notifications = this.state.notifications.map(n => {
      return <Notification
        key={n.id} // <<< Note that you should use a unique id, anything else will introduce subtle bugs.
        type="error"
        message={n.message}
        onClose={this.handleClose.bind(this, n.id)}/>
    });

    return (
      <div>
        <button onClick={this.handleAdd.bind(this)}>Add notification</button>
        <NotificationList>
          {notifications}
        </NotificationList>
      </div>
    );
  }
}
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
