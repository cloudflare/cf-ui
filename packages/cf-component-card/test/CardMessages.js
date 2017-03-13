import React from 'react';
import renderer from 'react-test-renderer';
import { CardMessages } from 'cf-component-card';

test('should render', () => {
  const component = renderer.create(
    <CardMessages
      messages={[
        { type: 'info', content: 'Message One' },
        { type: 'error', content: 'Message Two' }
      ]}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
