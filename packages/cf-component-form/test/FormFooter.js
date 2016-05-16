const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const FormFooter = require('../src/FormFooter');

describe('FormFooter', function() {
  it('should render', function() {
    assertEqualJSX(
      <FormFooter>FormFooter</FormFooter>,
      // should equal
      <div className="cf-form__footer">FormFooter</div>
    );
  });
});
