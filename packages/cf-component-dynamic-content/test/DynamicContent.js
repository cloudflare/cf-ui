import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { DynamicContent } from '../../cf-component-dynamic-content/src/index';

test('should render', function() {
  const snapshot = felaSnapshot(
    <DynamicContent
      dangerouslySetInnerHTML={{ __html: '<p>Hello World</p>' }}
    />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
