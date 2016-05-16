const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const TableHead = require('../src/TableHead');

describe('TableHead', function() {
  it('should render', function() {
    assertEqualJSX(
      <TableHead>TableHead</TableHead>,
      // should equal
      <thead className="cf-table__head">TableHead</thead>
    );
  });
});
