const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Radio = require('../src/Radio');

describe('Radio', function() {
  it('should render', function() {
    assertEqualJSX(
      <Radio
        label="Option 1"
        name="radio-option-1"
        value="option1"
        checked={false}
        onChange={() => {}}
      />,
      // should equal
      <label htmlFor="radio-option-1" className="cf-radio">
        <input
          type="radio"
          className="cf-radio__input"
          id="radio-option-1"
          name="radio-option-1"
          value="option1"
        />
        <span className="cf-radio__label">
          Option 1
        </span>
      </label>
    );
  });

  it('should render checked', function() {
    assertEqualJSX(
      <Radio
        label="Option 1"
        name="radio-option-1"
        value="option1"
        checked={true}
        onChange={() => {}}
      />,
      // should equal
      <label htmlFor="radio-option-1" className="cf-radio cf-radio--checked">
        <input
          type="radio"
          className="cf-radio__input"
          id="radio-option-1"
          name="radio-option-1"
          value="option1"
          checked={true}
          onChange={() => {}}
        />
        <span className="cf-radio__label">
          Option 1
        </span>
      </label>
    );
  });

  it('should render without a label', function() {
    assertEqualJSX(
      <Radio
        label={false}
        name="radio-option-1"
        value="option1"
        checked={false}
        onChange={() => {}}
      />,
      // should equal
      <label htmlFor="radio-option-1" className="cf-radio">
        <input
          type="radio"
          className="cf-radio__input"
          id="radio-option-1"
          name="radio-option-1"
          value="option1"
        />
      </label>
    );
  });
});
