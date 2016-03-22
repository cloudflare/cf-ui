const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const FormHeader = require('../src/FormHeader');

describe('FormHeader', function() {
  it('should render', function() {
    assertEqualJSX(
      <FormHeader title="FormHeader"/>,
      // should equal
      <div className="cf-form__header">
        <h3 className="cf-form__title">
          FormHeader
        </h3>
      </div>
    );
  });
});
