import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { FormFieldError } from '../src/index';
import { felaSnapshot } from 'cf-style-provider';
import { felaTestContext } from 'cf-style-provider';

test('should render valid state', () => {
  expect(
    renderToStaticMarkup(
      felaTestContext(<FormFieldError field={{}} validations={{}} />)
    )
  ).toBe('');
});

test('should render invalid state', () => {
  const snapshot = felaSnapshot(
    <FormFieldError field={{ invalid: true }} validations={{}} />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});

test('should render invalid state with validation errors', () => {
  const snapshot = felaSnapshot(
    <FormFieldError
      field={{ invalid: true }}
      validations={{ required: 'This is required' }}
    />
  );
  expect(snapshot.component).toMatchSnapshot();
  expect(snapshot.styles).toMatchSnapshot();
});
