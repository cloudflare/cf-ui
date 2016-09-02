const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Loading = require('../src/Loading');
const Icon = require ('cf-component-icon');

describe('Loading', function() {
  it('should render', function() {
    assertEqualJSX(
      <Loading/>,
        <Icon type="loading" label="Loading"/>
    );
  });
});
