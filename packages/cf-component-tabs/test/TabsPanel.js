const React = require('react');
const { PropTypes } = React;
const assertEqualJSX = require('assert-equal-jsx');
const TabsPanel = require('../src/TabsPanel');

class Context extends React.Component {
  getChildContext() {
    return { active: this.props.active };
  }
  render() {
    return this.props.children;
  }
}

Context.propTypes = {
  active: PropTypes.string.isRequired,
  children: PropTypes.node
};

Context.childContextTypes = {
  active: PropTypes.string.isRequired
};

describe('TabsPanel', function() {
  it('should render', function() {
    assertEqualJSX(
      <Context active="something-else">
        <TabsPanel id="tab">TabsPanel</TabsPanel>
      </Context>,
      // should equal
      <div
        className="cf-tabs__panel"
        role="tabpanel"
        aria-labelledby="tab"
        aria-hidden="true"
      >
        TabsPanel
      </div>
    );
  });

  it('should render active', function() {
    assertEqualJSX(
      <Context active="tab">
        <TabsPanel id="tab">TabsPanel</TabsPanel>
      </Context>,
      // should equal
      <div
        className="cf-tabs__panel"
        role="tabpanel"
        aria-labelledby="tab"
        aria-hidden="false"
      >
        TabsPanel
      </div>
    );
  });
});
