const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const expect = require('chai').expect;
const renderToStaticMarkup = require('react-dom/server').renderToStaticMarkup;
const FormFieldError = require('../src/FormFieldError');

describe('FormFieldError', function() {
  it('should render valid state', function() {
    expect(
      renderToStaticMarkup(<FormFieldError field={{}} validations={{}} />)
    ).to.be.equal('');
  });

  it('should render invalid state', function() {
    assertEqualJSX(
      <FormFieldError field={{ invalid: true }} validations={{}} />,
      // should equal
      <div className="cf-form__field-error" />
    );
  });

  it('should render invalid state with validation errors', function() {
    assertEqualJSX(
      <FormFieldError
        field={{ invalid: true }}
        validations={{ required: 'This is required' }}
      />,
      // should equal
      <div className="cf-form__field-error">
        <p>This is required</p>
      </div>
    );
  });
});
