import React from 'react';
import { render } from 'react-dom';
import { List, ListItem } from '../../src/index';

class Component extends React.Component {
  render() {
    return (
      <div>
        <p>Basic usage:</p>
        <List>
          <ListItem>One</ListItem>
          <ListItem>Two</ListItem>
        </List>

        <p>Ordered list:</p>
        <List ordered>
          <ListItem>One</ListItem>
          <ListItem>Two</ListItem>
        </List>

        <p>Unstyled list:</p>
        <List unstyled>
          <ListItem>One</ListItem>
          <ListItem>Two</ListItem>
        </List>
      </div>
    );
  }
}

render(<Component />, document.getElementById('cf-component-list--basic'));
