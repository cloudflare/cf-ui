const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const TableHeadCell = require('../src/TableHeadCell');

describe('TableHeadCell', function() {
  it('should render', function() {
    assertEqualJSX(
      <TableHeadCell>TableHeadCell</TableHeadCell>,
      // should equal
      <th className="cf-table__cell cf-table__cell--head">TableHeadCell</th>
    );
  });
});
