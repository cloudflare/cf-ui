import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Abbr from '../src/Abbr';

describe('Abbr', function() {
  it('should render', function() {
    assertEqualJSX(
      <Abbr title="Abbreviation">Abbr</Abbr>,
      // should equal
      <abbr className="cf-abbr" title="Abbreviation">Abbr</abbr>
    );
  });
});
