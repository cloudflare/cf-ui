const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const FormFieldset = require('../src/FormFieldset');

describe('FormFieldset', function() {
  it('should render', function() {
    assertEqualJSX(
      <FormFieldset legend="Legend">FormFieldset</FormFieldset>,
      // should equal
      <fieldset className="cf-form__fieldset">
        <legend className="cf-form__fieldset_legend">
          Legend
        </legend>
        <div className="cf-form__fieldset_content">
          FormFieldset
        </div>
      </fieldset>
    );
  });
});
