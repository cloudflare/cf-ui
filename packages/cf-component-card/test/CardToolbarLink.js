const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const CardToolbarLink = require('../src/CardToolbarLink');

describe('CardToolbarLink', function() {
  it('should render', function() {
    assertEqualJSX(
      <CardToolbarLink id="link" isActive={false} onClick={() => {}}>
        CardToolbarLink
      </CardToolbarLink>,
      // should equal
      <a role="tab" id="link" href="#!" className="cf-link cf-card__toolbar_link">
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
      <a role="tab" id="link" href="#!" className="cf-link cf-card__toolbar_link cf-card__toolbar_link--open">
        CardToolbarLink
      </a>
    );
  });
});
