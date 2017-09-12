import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { ModalClose } from '../../cf-component-modal/src/index';

test('should render', () => {
  const snapshot = felaSnapshot(<ModalClose onClick={() => {}} />);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render with a label', () => {
  const snapshot = felaSnapshot(
    <ModalClose label="label" onClick={() => {}} />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
