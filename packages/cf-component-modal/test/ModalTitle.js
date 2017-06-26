import React from 'react';
import { ModalTitle } from '../../cf-component-modal/src/index';
import { Heading } from '../../cf-component-heading/src/index';
import felaSnapshot from 'cf-style-provider/src/felaSnapshot';

test('should render', () => {
  const snapshot = felaSnapshot(<ModalTitle>ModalTitle</ModalTitle>);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
