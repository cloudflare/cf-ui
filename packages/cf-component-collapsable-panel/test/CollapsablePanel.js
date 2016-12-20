const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const CollapsablePanel = require('../src/CollapsablePanel');

describe('Collapsable Panel', function() {
  it('should render', function() {
    assertEqualJSX(
      <CollapsablePanel>
        <div>hi</div>
      </CollapsablePanel>,
      // should equal
      <div className="cf-collapsable-panel">
        <div className="cf-collapsable-panel__link-container">
          <a className="cf-collapsable-panel__link"></a>
          <span className="cf-collpasable-panel__link-description"></span>
        </div>
      </div>
    );
  });
});
