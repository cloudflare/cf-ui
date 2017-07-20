import React from 'react';
import { UnorderedList, OrderedList, ListItem } from 'cf-component-list';

const ListComponent = () => (
  <div>
    <p>Basic usage:</p>
    <UnorderedList>
      <ListItem>One</ListItem>
      <ListItem>Two</ListItem>
    </UnorderedList>

    <p>Ordered list:</p>
    <OrderedList>
      <ListItem>One</ListItem>
      <ListItem>Two</ListItem>
    </OrderedList>
  </div>
);

export default ListComponent;
