const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const Textarea = require('../src/Textarea');

describe('Textarea', function() {
  it('should render', function() {
    assertEqualJSX(
      <Textarea
        name="example"
        value="content"
        onChange={() => {}}/>,
      // should equal
      <textarea
        className="cf-textarea"
        name="example"
        value="content"
        onChange={() => {}}/>
    );
  });
});
