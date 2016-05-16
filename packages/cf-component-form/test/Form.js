const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Form = require('../src/Form');

describe('Form', function() {
  it('should render layout', function() {
    assertEqualJSX(
      <Form layout="horizontal">Form</Form>,
      // should equal
      <form className="cf-form cf-form--horizontal">Form</form>
    );

    assertEqualJSX(
      <Form layout="vertical">Form</Form>,
      // should equal
      <form className="cf-form cf-form--vertical">Form</form>
    );
  });
});
