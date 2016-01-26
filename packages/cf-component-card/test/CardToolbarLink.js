import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import CardToolbarLink from '../src/CardToolbarLink';

describe('CardToolbar', function() {
  it('should render', function() {
    assertEqualJSX(
      <CardToolbarLink id="link" isActive={false} onClick={() => {}}>
        CardToolbarLink
      </CardToolbarLink>,
      // should equal
      <a href="#" role="tab" id="link" className="cf-card__toolbar_link">
        CardToolbarLink
      </a>
    );
  });

  it('should render with isActive', function() {
    assertEqualJSX(
      <CardToolbarLink id="link" isActive={true} onClick={() => {}}>
        CardToolbarLink
      </CardToolbarLink>,
      // should equal
      <a href="#" role="tab" id="link" className="cf-card__toolbar_link cf-card__toolbar_link--open">
        CardToolbarLink
      </a>
    );
  });
});
