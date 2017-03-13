import React from 'react';
import renderer from 'react-test-renderer';
import Progress from 'cf-component-progress';
import Link from 'cf-component-link';

test('should render', () => {
  const component = renderer.create(
    <Progress
      active="foo"
      onChange={() => {}}
      steps={[
        { id: 'foo', label: 'Foo', disabled: false },
        { id: 'bar', label: 'Bar', disabled: false },
        { id: 'baz', label: 'Baz', disabled: true }
      ]}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
