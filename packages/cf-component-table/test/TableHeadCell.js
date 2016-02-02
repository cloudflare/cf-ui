const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const TableHeadCell = require('../src/TableHeadCell');

describe('TableHeadCell', function() {
  it('should render', function() {
    assertEqualJSX(
      <TableHeadCell>TableHeadCell</TableHeadCell>,
      // should equal
      <th className="cf-table__cell cf-table__cell--head">TableHeadCell</th>
    );
  });

  it('should render with sortable', function() {
    assertEqualJSX(
      <TableHeadCell sortable>TableHeadCell</TableHeadCell>,
      // should equal
      <th className="cf-table__cell cf-table__cell--head cf-table__cell--sortable">TableHeadCell</th>
    );
  });

  it('should render with editable', function() {
    assertEqualJSX(
      <TableHeadCell editable>TableHeadCell</TableHeadCell>,
      // should equal
      <th className="cf-table__cell cf-table__cell--head cf-table__cell--editable">TableHeadCell</th>
    );
  });
});
