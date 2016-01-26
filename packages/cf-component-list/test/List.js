import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import List from '../src/List';
import ListItem from '../src/ListItem';

describe('List', function() {
  it('should render', function() {
    assertEqualJSX(
      <List>List</List>,
      // should equal
      <ul className="cf-list">List</ul>
    );
  });

  it('should render ordered', function() {
    assertEqualJSX(
      <List ordered>List</List>,
      // should equal
      <ol className="cf-list cf-list--ordered">List</ol>
    );
  });

  it('should render unstyled', function() {
    assertEqualJSX(
      <List unstyled>List</List>,
      // should equal
      <ul className="cf-list cf-list--unstyled">List</ul>
    );
  });
});
