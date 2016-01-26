import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import TableFoot from '../src/TableFoot';

describe('TableFoot', function() {
  it('should render', function() {
    assertEqualJSX(
      <TableFoot>TableFoot</TableFoot>,
      // should equal
      <tfoot className="cf-table__foot">TableFoot</tfoot>
    );
  });
});
