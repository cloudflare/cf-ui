const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const TableFoot = require('../src/TableFoot');

describe('TableFoot', function() {
  it('should render', function() {
    assertEqualJSX(
      <TableFoot>TableFoot</TableFoot>,
      // should equal
      <tfoot className="cf-table__foot">TableFoot</tfoot>
    );
  });

  it('should render extra class name', function() {
    assertEqualJSX(
      <TableFoot className="extra">TableFoot</TableFoot>,
      // should equal
      <tfoot className="cf-table__foot extra">TableFoot</tfoot>
    );
  });
});
