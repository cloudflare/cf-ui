import React from 'react';
import { List, ListItem } from 'cf-component-list';

const ListComponent = () => (
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

export default ListComponent;
