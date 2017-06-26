import React from 'react';
import { HeadingCaption } from '../../cf-component-heading/src/index';
import felaSnapshot from 'cf-style-provider/src/felaSnapshot';

test('should render', () => {
  const snapshot = felaSnapshot(
    <HeadingCaption>Heading Caption</HeadingCaption>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
