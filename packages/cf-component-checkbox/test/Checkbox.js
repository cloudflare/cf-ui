const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Checkbox = require('../src/Checkbox');
const {expect} = require('chai');
const {render, unmountComponentAtNode} = require('react-dom');
const TestUtils = require('react-addons-test-utils');

describe('Checkbox', function() {
  beforeEach(function() {
    this.root = global.document.createElement('div');
    global.document.body.appendChild(this.root);
  });

  it('should handle onChange', function() {
    let called = false;
    let onChange = () => called = true;

    render(
      <Checkbox label="false" name="name" value="value" checked="false" onChange={onChange}/>,
      this.root
    );

    setTimeout(() => {
      TestUtils.Simulate.mouseEnter(
        TestUtils.findRenderedDOMComponentWithClass(instance, 'cf-checkbox__input')
      );

      setTimeout(() => {
        expect(called).to.be.false;
        TestUtils.Simulate.mouseLeave(
          TestUtils.findRenderedDOMComponentWithClass(instance, 'cf-checkbox__input')
        );

        setTimeout(() => {
          expect(called).to.be.true;
          done();
        }, 150);
      }, 150);
    }, 50);
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
