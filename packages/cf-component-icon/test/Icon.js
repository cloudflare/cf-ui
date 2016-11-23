const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Icon = require('../src/Icon');

describe('Icon', function() {
  it('should render type', function() {
    assertEqualJSX(
      <Icon type="info-sign" label="Info"/>,
      // should equal
      <i className="cf-icon cf-icon--info-sign">
        <span className="cf-icon__label">Info</span>
      </i>
    );
  });

  it('should render type/size', function() {
    assertEqualJSX(
      <Icon type="info-sign" label="Info" size="xlarge"/>,
      // should equal
      <i className="cf-icon cf-icon--info-sign cf-icon--xlarge">
        <span className="cf-icon__label">Info</span>
      </i>
    );
  });

  it('should render type/border/spin/muted/white', function() {
    assertEqualJSX(
      <Icon type="info-sign" label="Info" border spin muted white/>,
      // should equal
      <i className="cf-icon cf-icon--info-sign cf-icon--border cf-icon--spin cf-icon--muted cf-icon--white">
        <span className="cf-icon__label">Info</span>
      </i>
    );
  });

  it('should render type with no label', function() {
    assertEqualJSX(
      <Icon type="info-sign" label={false}/>,
      // should equal
      <i className="cf-icon cf-icon--info-sign"></i>
    );
  });

  it('should render role', function() {
    assertEqualJSX(
      <Icon type="loading" label={false} role="status"/>,
      // should equal
      <i className="cf-icon cf-icon--loading" role="status"></i>
    );
  });
});
