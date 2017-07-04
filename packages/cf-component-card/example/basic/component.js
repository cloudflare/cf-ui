import React from 'react';
import {
  Card,
  CardBlock,
  CardContent,
  CardControl,
  CardDrawers,
  CardMessages,
  CardSection
} from 'cf-component-card';
import { Button } from 'cf-component-button';

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDrawer: null
    };
    this.handleDrawerClick = this.handleDrawerClick.bind(this);
  }

  handleDrawerClick(id) {
    this.setState({
      activeDrawer: id === this.state.activeDrawer ? null : id
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <CardContent
            title="Hello World"
            footerMessage="This is a footer message."
          >
            <p>Here is some content.</p>
            <CardMessages
              messages={[
                { type: 'info', content: 'Info Message' },
                { type: 'error', content: 'Error Message' }
              ]}
            />
          </CardContent>
          <CardControl>
            <CardBlock>
              This is a block
            </CardBlock>
            <CardBlock>
              <Button type="default" onClick={() => {}}>Example Control</Button>
            </CardBlock>
          </CardControl>
        </CardSection>
        <CardDrawers
          onClick={this.handleDrawerClick}
          active={this.state.activeDrawer}
          drawers={[
            {
              id: 'one',
              name: 'One',
              content: <p>One</p>
            },
            {
              id: 'two',
              name: 'Two',
              content: <p>Two</p>
            }
          ]}
        />
      </Card>
    );
  }
}

export default CardComponent;
