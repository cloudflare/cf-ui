import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import TableBody from '../src/TableBody';

describe('TableBody', function() {
  it('should render', function() {
    assertEqualJSX(
      <TableBody>TableBody</TableBody>,
      // should equal
      <tbody className="cf-table__body">TableBody</tbody>
    );
  });
});
