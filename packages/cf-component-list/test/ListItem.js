import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import ListItem from '../src/ListItem';

describe('ListItem', function() {
  it('should render', function() {
    assertEqualJSX(
      <ListItem>ListItem</ListItem>,
      // should equal
      <li className="cf-list__item">ListItem</li>
    );
  });
});
