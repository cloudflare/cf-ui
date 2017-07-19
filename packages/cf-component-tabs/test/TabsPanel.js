import React from 'react';
import PropTypes from 'prop-types';
import { felaSnapshot } from 'cf-style-provider';

import { TabsPanel } from '../../cf-component-tabs/src/index';

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
  const snapshot = felaSnapshot(
    <Context active="something-else">
      <TabsPanel id="tab">TabsPanel</TabsPanel>
    </Context>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render active', () => {
  const snapshot = felaSnapshot(
    <Context active="tab">
      <TabsPanel id="tab">TabsPanel</TabsPanel>
    </Context>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
