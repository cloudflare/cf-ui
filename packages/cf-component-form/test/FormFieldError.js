import React from 'react';
import renderer from 'react-test-renderer';
import { renderToStaticMarkup } from 'react-dom/server';
import { FormFieldError } from '../src/index';
import felaTestContext from '../../../felaTestContext';

test('should render valid state', () => {
  expect(
    renderToStaticMarkup(
      felaTestContext(<FormFieldError field={{}} validations={{}} />)
    )
  ).toBe('');
});

test('should render invalid state', () => {
  const component = renderer.create(
    felaTestContext(
      <FormFieldError field={{ invalid: true }} validations={{}} />
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render invalid state with validation errors', () => {
  const component = renderer.create(
    felaTestContext(
      <FormFieldError
        field={{ invalid: true }}
        validations={{ required: 'This is required' }}
      />
    )
  );
  expect(component.toJSON()).toMatchSnapshot();
});
