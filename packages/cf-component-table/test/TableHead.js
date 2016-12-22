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

  it('should render extra class name', function() {
    assertEqualJSX(
      <TableHead className="extra">TableHead</TableHead>,
      // should equal
      <thead className="cf-table__head extra">TableHead</thead>
    );
  });
});
