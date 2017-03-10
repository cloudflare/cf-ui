import React from 'react';
import renderer from 'react-test-renderer';
import { Tabs, TabsPanel } from 'cf-component-tabs';

test('should render', () => {
  const component = renderer.create(
    <Tabs
      active="2"
      tabs={[{ id: '1', label: 'One' }, { id: '2', label: 'Two' }]}
      onChange={() => {}}
    >
      <TabsPanel id="1">One</TabsPanel>
      <TabsPanel id="2">Two</TabsPanel>
    </Tabs>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
