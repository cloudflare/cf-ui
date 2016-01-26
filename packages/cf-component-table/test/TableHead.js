import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import TableHead from '../src/TableHead';

describe('TableHead', function() {
  it('should render', function() {
    assertEqualJSX(
      <TableHead>TableHead</TableHead>,
      // should equal
      <thead className="cf-table__head">TableHead</thead>
    );
  });
});
