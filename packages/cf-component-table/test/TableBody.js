const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const TableBody = require('../src/TableBody');

describe('TableBody', function() {
  it('should render', function() {
    assertEqualJSX(
      <TableBody>TableBody</TableBody>,
      // should equal
      <tbody className="cf-table__body">TableBody</tbody>
    );
  });

  it('should render extra class names', function() {
    assertEqualJSX(
      <TableBody className="extra">TableBody</TableBody>,
      // should equal
      <tbody className="cf-table__body extra">TableBody</tbody>
    );
  });
});
