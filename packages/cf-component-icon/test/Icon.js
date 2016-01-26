import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import Icon from '../src/Icon';

describe('Icon', function() {
  it('should render type', function() {
    assertEqualJSX(
      <Icon type="info-sign" label="Info"/>,
      // should equal
      <i className="cf-icon cf-icon--info-sign">Info</i>
    );
  });

  it('should render type/size', function() {
    assertEqualJSX(
      <Icon type="info-sign" label="Info" size="xlarge"/>,
      // should equal
      <i className="cf-icon cf-icon--info-sign cf-icon--xlarge">Info</i>
    );
  });

  it('should render type/border/spin/muted/white', function() {
    assertEqualJSX(
      <Icon type="info-sign" label="Info" border spin muted white/>,
      // should equal
      <i className="cf-icon cf-icon--info-sign cf-icon--border cf-icon--spin cf-icon--muted cf-icon--white">Info</i>
    );
  });

  it('should render type with no label', function() {
    assertEqualJSX(
      <Icon type="info-sign" label={false}/>,
      // should equal
      <i className="cf-icon cf-icon--info-sign"></i>
    );
  });
});
