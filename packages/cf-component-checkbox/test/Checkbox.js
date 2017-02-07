const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Checkbox = require('../src/Checkbox');
const { expect } = require('chai');
const { shallow } = require('enzyme');

describe('Checkbox', function() {
  it('should handle onChange', function() {
    let called = false;

    let wrapper = shallow(
      <Checkbox onChange={ () => called = true } />
    );

    wrapper.find('input').simulate('change');
    expect(called).to.be.true;
  });

  it('should render', function() {
    assertEqualJSX(
      <Checkbox
        label="Option 1"
        name="checkbox-option-1"
        value="option1"
        checked={false}
        onChange={() => {}}/>,
      // should equal
      <label htmlFor="checkbox-option-1" className="cf-checkbox">
        <input type="checkbox"
          className="cf-checkbox__input"
          id="checkbox-option-1"
          name="checkbox-option-1"
          value="option1"/>
        <span className="cf-checkbox__label">
          Option 1
        </span>
      </label>
    );
  });

  it('should render checked', function() {
    assertEqualJSX(
      <Checkbox
        label="Option 1"
        name="checkbox-option-1"
        value="option1"
        checked={true}
        onChange={() => {}}/>,
      // should equal
      <label htmlFor="checkbox-option-1" className="cf-checkbox cf-checkbox--checked">
        <input type="checkbox"
          className="cf-checkbox__input"
          id="checkbox-option-1"
          name="checkbox-option-1"
          value="option1"
          checked={true}
          onChange={() => {}}/>
        <span className="cf-checkbox__label">
          Option 1
        </span>
      </label>
    );
  });

  it('should render without a label', function() {
    assertEqualJSX(
      <Checkbox
        label={false}
        name="checkbox-option-1"
        value="option1"
        checked={false}
        onChange={() => {}}/>,
      // should equal
      <label htmlFor="checkbox-option-1" className="cf-checkbox">
        <input type="checkbox"
          className="cf-checkbox__input"
          id="checkbox-option-1"
          name="checkbox-option-1"
          value="option1"/>
      </label>
    );
  });
});
