const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const FormFieldError = require('../src/FormFieldError');

describe('FormFieldError', function() {
  it('should render valid state', function() {
    assertEqualJSX(
      <FormFieldError field={{}} validations={{}}></FormFieldError>,
      ''
    );
  });

  it('should render invalid state', function() {
    assertEqualJSX(
      <FormFieldError field={{ invalid: true }} validations={{}}></FormFieldError>,
      // should equal
      <div className="cf-form__field-error"></div>
    );
  });

  it('should render invalid state with validation errors', function() {
    assertEqualJSX(
      <FormFieldError field={{ invalid: true }} validations={{ required: 'This is required' }}></FormFieldError>,
      // should equal
      <div className="cf-form__field-error">
        <p>This is required</p>
      </div>
    );
  });
});
