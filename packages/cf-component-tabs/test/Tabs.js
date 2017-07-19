import React from 'react';
import { felaSnapshot } from 'cf-style-provider';

import { Tabs, TabsPanel } from '../../cf-component-tabs/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(
    <Tabs
      active="2"
      tabs={[{ id: '1', label: 'One' }, { id: '2', label: 'Two' }]}
      onChange={() => {}}
    >
      <TabsPanel id="1">One</TabsPanel>
      <TabsPanel id="2">Two</TabsPanel>
    </Tabs>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
