const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const {trackFocus, getCurrentFocus} = require('../../../utils/focus');
const {equal: assertEqual} = require('assert');
const {render, unmountComponentAtNode} = require('react-dom');

const Dropdown = require('../src/Dropdown');
const DropdownLink = require('../src/DropdownLink');
const DropdownSeparator = require('../src/DropdownSeparator');

describe('Dropdown', function() {
  it('should render', function() {
    assertEqualJSX(
      <Dropdown onClose={() => {}}>
        Dropdown
      </Dropdown>,
      // should equal
      <ul role="menu" className="cf-dropdown cf-dropdown--left">
        Dropdown
      </ul>
    );
  });

  it('should render with align', function() {
    assertEqualJSX(
      <Dropdown align="right" onClose={() => {}}>
        Dropdown
      </Dropdown>,
      // should equal
      <ul role="menu" className="cf-dropdown cf-dropdown--right">
        Dropdown
      </ul>
    );
  });

  describe('interactions', function() {
    beforeEach(function() {
      this.root = global.document.createElement('div');
      global.document.body.appendChild(this.root);
      this.restoreFocus = trackFocus();
    });

    afterEach(function() {
      this.restoreFocus();
      unmountComponentAtNode(this.root);
      global.document.body.removeChild(this.root);
      delete this.root;
    });

    it('should call `onClose` when the `esc` key is pressed', function() {
      var called = false;
      var onClose = function() { called = true; };

      var dom = <Dropdown onClose={onClose}/>;
      var instance = render(dom, this.root);

      instance.handleDocumentKeydown({ keyCode: 27 });
      assertEqual(called, true);
    });

    it('should be able to navigate with the up and down keys', function() {
      const down = { keyCode: 40, preventDefault() {} };
      const up = { keyCode: 38, preventDefault() {} };

      const getFocusedHref = () => getCurrentFocus().getAttribute('href');

      const dom = (
        <Dropdown onClose={() => {}}>
          <DropdownLink to="one"/>
          <DropdownLink to="two"/>
          <DropdownLink to="three"/>
        </Dropdown>
      );
      const instance = render(dom, this.root);

      instance.handleDocumentKeydown(down);
      assertEqual(getFocusedHref(), 'one');

      instance.handleDocumentKeydown(down);
      assertEqual(getFocusedHref(), 'two');

      instance.handleDocumentKeydown(down);
      instance.handleDocumentKeydown(down);
      assertEqual(getFocusedHref(), 'three');

      instance.handleDocumentKeydown(up);
      assertEqual(getFocusedHref(), 'two');

      const two = getCurrentFocus();

      instance.handleDocumentKeydown(up);
      instance.handleDocumentKeydown(up);
      assertEqual(getFocusedHref(), 'one');

      two.focus();
      instance.handleDocumentKeydown(down);
      assertEqual(getFocusedHref(), 'three');
    });
  });
});
