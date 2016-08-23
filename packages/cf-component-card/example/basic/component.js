const React = require('react');
const {render} = require('react-dom');
const {
  Card,
  CardContent,
  CardControl,
  CardDrawers,
  CardLoadingText,
  CardMessages,
  CardSection
} = require('../../src/index');
const {Button} = require('cf-component-button');

class Component extends React.Component {
  state = {
    activeDrawer: null
  };

  handleDrawerClick = id => {
    this.setState({
      activeDrawer: id === this.state.activeDrawer ? null : id
    });
  };

  render() {
    return (
      <Card>
        <CardSection>
          <CardContent title="Hello World" footerMessage="This is a footer message.">
            <p>Here is some content.</p>
            <CardMessages messages={[
              { type: 'info', content: 'Info Message'},
              { type: 'error', content: 'Error Message'}
            ]}/>
          </CardContent>
          <CardControl>
            <Button onClick={() => {}}>Example Control</Button>
          </CardControl>
        </CardSection>
        <CardDrawers
          onClick={this.handleDrawerClick}
          active={this.state.activeDrawer}
          drawers={[{
            id: 'one',
            name: 'One',
            content: <p>One</p>
          }, {
            id: 'two',
            name: 'Two',
            content: <p>Two</p>
          }]}/>
      </Card>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-card--basic')
);
