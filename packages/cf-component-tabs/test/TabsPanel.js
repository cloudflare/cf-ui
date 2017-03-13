import React, { PropTypes } from 'react';
import renderer from 'react-test-renderer';
import { TabsPanel } from 'cf-component-tabs';

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

test('should render', () => {
  const component = renderer.create(
    <Context active="something-else">
      <TabsPanel id="tab">TabsPanel</TabsPanel>
    </Context>
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render active', () => {
  const component = renderer.create(
    <Context active="tab">
      <TabsPanel id="tab">TabsPanel</TabsPanel>
    </Context>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
