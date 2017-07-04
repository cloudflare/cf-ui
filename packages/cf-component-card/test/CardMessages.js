import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { CardMessages } from '../../cf-component-card/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(
    <CardMessages
      messages={[
        { type: 'info', content: 'Message One' },
        { type: 'error', content: 'Message Two' }
      ]}
    />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
