const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const Input = require('../src/Input');

describe('Input', function() {
  it('should render', function() {
    assertEqualJSX(
      <Input
        name="example"
        value="content"
        onChange={() => {}}/>,
      // should equal
      <input
        type="text"
        className="cf-input cf-input--text"
        name="example"
        value="content"
        onChange={() => {}}/>
    );
  });

  it('should render with type', function() {
    assertEqualJSX(
      <Input
        type="search"
        name="example"
        value="content"
        onChange={() => {}}/>,
      // should equal
      <input
        type="search"
        className="cf-input cf-input--search"
        name="example"
        value="content"
        onChange={() => {}}/>
    );
  });

  it('should render with error', function() {
    assertEqualJSX(
      <Input
        name="example"
        value=""
        invalid
        onChange={() => {}}/>,
      // should equal
      <input
        type="text"
        className="cf-input cf-input--text cf-input--invalid"
        name="example"
        value=""
        onChange={() => {}}/>
    );
  });

  it('should render with placeholder', function() {
    assertEqualJSX(
      <Input
        name="example"
        value=""
        placeholder="placeholder"
        onChange={() => {}}/>,
      // should equal
      <input
        type="text"
        className="cf-input cf-input--text"
        name="example"
        value=""
        placeholder="placeholder"
        onChange={() => {}}/>
    );
  });

  it('should render with autocomplete', function () {
    assertEqualJSX(
      <Input
        name="example"
        value=""
        autoComplete="off"
        onChange={() => {}}/>,
      <input
        type="text"
        className="cf-input cf-input--text"
        name="example"
        value=""
        autoComplete="off"
        onChange={() => {}}/>
    );
  });

  it('should pass all props down to the inner input', function() {
    assertEqualJSX(
      <Input
        disabled
        type="number"
        data-shadowed={true}
        min={3}
      />,
      <input
        className="cf-input cf-input--number"
        disabled="true"
        type="number"
        data-shadowed="true"
        min="3"
      />
    );
  });

});
