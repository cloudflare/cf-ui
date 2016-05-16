const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const FormLabel = require('../src/FormLabel');

describe('FormLabel', function() {
  it('should render', function() {
    assertEqualJSX(
      <FormLabel>FormLabel</FormLabel>,
      // should equal
      <label className="cf-form__label">FormLabel</label>
    );
  });

  it('should render hidden', function() {
    assertEqualJSX(
      <FormLabel hidden>FormLabel</FormLabel>,
      // should equal
      <label className="cf-form__label cf-form__label--hidden">FormLabel</label>
    );
  });
});
