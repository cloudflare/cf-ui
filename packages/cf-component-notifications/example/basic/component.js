const React = require('react');
const {render} = require('react-dom');

const {
  NotificationList,
  Notification,
  NotificationGlobalContainer
} = require('../../src/index');
const {
  Button
} = require('cf-component-button');

let UNIQUE_ID = 0;

class Component extends React.Component {
  state = {
    notifications: []
  };

  handleAdd = (type, persist, delay) => {
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
  };

  handleClear = () => {
    this.setState({
      notifications: []
    });
  };

  handleClose = id => {
    this.setState({
      notifications: this.state.notifications.filter(n => n.id !== id)
    });
  };

  render() {
    const notifications = this.state.notifications.map(n => {
      return <Notification
        key={n.id}
        type={n.type}
        message={n.message}
        persist={n.persist}
        delay={n.delay}
        onClose={this.handleClose.bind(null, n.id)}/>
    }).reverse();

    return (
      <div>
        <Button type="error" onClick={this.handleAdd.bind(null, 'error', false, 4000)}>Add Error Notification</Button>
        <Button type="warning" onClick={this.handleAdd.bind(null, 'warning', false, 4000)}>Add Warning Notification</Button>
        <Button type="success" onClick={this.handleAdd.bind(null, 'success', false, 4000)}>Add Success Notification</Button>
        <Button type="primary" onClick={this.handleAdd.bind(null, 'info', false, 4000)}>Add Info Notification</Button>

        <Button type="primary" onClick={this.handleAdd.bind(null, 'info', false, 10000)}>Add 10000ms Notification</Button>
        <Button type="primary" onClick={this.handleAdd.bind(null, 'info', true, null)}>Add Persistant Notification</Button>

        <Button type="default" onClick={this.handleClear}>Clear Notifications</Button>

        <NotificationGlobalContainer>
          <NotificationList>
            {notifications}
          </NotificationList>
        </NotificationGlobalContainer>
      </div>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-notifications--basic')
);
