import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { CardContent } from '../../cf-component-card/src/index';

test('should render without footer message', () => {
  const snapshot = felaSnapshot(
    <CardContent title="Title">CardContent</CardContent>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with footer message', () => {
  const snapshot = felaSnapshot(
    <CardContent title="Title" footerMessage="Footer Message">
      CardContent
    </CardContent>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
