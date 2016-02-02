const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const ListItem = require('../src/ListItem');

describe('ListItem', function() {
  it('should render', function() {
    assertEqualJSX(
      <ListItem>ListItem</ListItem>,
      // should equal
      <li className="cf-list__item">ListItem</li>
    );
  });
});
