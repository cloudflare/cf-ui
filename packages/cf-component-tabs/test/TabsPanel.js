const React = require('react');
const {PropTypes} = React;
const assertEqualJSX = require('assert-equal-jsx');
const TabsPanel = require('../src/TabsPanel');

class Context extends React.Component {
  getChildContext() {
    return { activeTab: this.props.activeTab };
  }
  render() {
    return this.props.children;
  }
}

Context.propTypes = {
  activeTab: PropTypes.string.isRequired,
  children: PropTypes.node
};

Context.childContextTypes = {
  activeTab: PropTypes.string.isRequired
};

describe('TabsPanel', function() {
  it('should render', function() {
    assertEqualJSX(
      <Context activeTab="something-else">
        <TabsPanel id="tab">TabsPanel</TabsPanel>
      </Context>,
      // should equal
      <div className="cf-tabs__panel" role="tabpanel" aria-labelledby="tab" aria-hidden="true" style={{ display: 'none' }}>
        TabsPanel
      </div>
    );
  });

  it('should render active', function() {
    assertEqualJSX(
      <Context activeTab="tab">
        <TabsPanel id="tab">TabsPanel</TabsPanel>
      </Context>,
      // should equal
      <div className="cf-tabs__panel" role="tabpanel" aria-labelledby="tab" aria-hidden="false" style={{ display: 'block' }}>
        TabsPanel
      </div>
    );
  });
});
