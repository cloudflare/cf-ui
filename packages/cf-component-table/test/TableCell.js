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

  it('should render with align', function() {
    assertEqualJSX(
      <TableCell align="center">TableCell</TableCell>,
      // should equal
      <td className="cf-table__cell cf-table__cell--align-center">TableCell</td>
    );
  });
});
