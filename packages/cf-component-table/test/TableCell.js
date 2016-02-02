const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const TableCell = require('../src/TableCell');

describe('TableCell', function() {
  it('should render', function() {
    assertEqualJSX(
      <TableCell>TableCell</TableCell>,
      // should equal
      <td className="cf-table__cell">TableCell</td>
    );
  });

  it('should render with sortable', function() {
    assertEqualJSX(
      <TableCell sortable>TableCell</TableCell>,
      // should equal
      <td className="cf-table__cell cf-table__cell--sortable">TableCell</td>
    );
  });

  it('should render with editable', function() {
    assertEqualJSX(
      <TableCell editable>TableCell</TableCell>,
      // should equal
      <td className="cf-table__cell cf-table__cell--editable">TableCell</td>
    );
  });
});
