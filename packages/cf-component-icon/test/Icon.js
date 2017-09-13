import React from 'react';
import { felaSnapshot } from 'cf-style-provider';
import { Icon } from '../../cf-component-icon/src/index';

test('should render type', () => {
  const snapshot = felaSnapshot(<Icon type="info-sign" label="Info" />);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render type/size', () => {
  const snapshot = felaSnapshot(
    <Icon type="hamburger" label="Info" size="2x" />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render type with no label', () => {
  const snapshot = felaSnapshot(<Icon type="info-sign" label={false} />);
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render colors', () => {
  const snapshot = felaSnapshot(
    <div>
      <Icon label="default" size="2x" type="search" color="default" />
      <Icon label="primary" size="2x" type="caret-right" color="primary" />
      <Icon label="success" size="2x" type="ok" color="success" />
      <Icon label="warning" size="2x" type="info-sign" color="warning" />
      <Icon label="danger" size="2x" type="exclamation-sign" color="danger" />
      <Icon label="black" size="2x" type="remove" color="black" />
      <Icon label="white" size="2x" type="shield" color="white" />
    </div>
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
