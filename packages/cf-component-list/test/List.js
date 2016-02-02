const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const List = require('../src/List');
const ListItem = require('../src/ListItem');

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
