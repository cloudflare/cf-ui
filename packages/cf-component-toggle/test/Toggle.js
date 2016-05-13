const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Toggle = require('../src/Toggle');

describe('Toggle', function() {
  it('should render', function() {
    assertEqualJSX(
      <Toggle label="Test Toggle" name="test"/>,
      // should equal
      <label htmlFor="test" className="cf-toggle">
        <input
          className="cf-toggle__checkbox"
          type="checkbox"
          id="test"
          name="test"/>
        <span className="cf-toggle__label">Test Toggle</span>
        <span className="cf-toggle__handle"/>
      </label>
    );
  });

  it('should render checked', function() {
    assertEqualJSX(
      <Toggle label="Test Toggle" name="test" value={true}/>,
      // should equal
      <label htmlFor="test" className="cf-toggle cf-toggle--active">
        <input
          className="cf-toggle__checkbox"
          type="checkbox"
          id="test"
          name="test"
          checked={true}
          onChange={() => {}}/>
        <span className="cf-toggle__label">Test Toggle</span>
        <span className="cf-toggle__handle"/>
      </label>
    );
  });
});
