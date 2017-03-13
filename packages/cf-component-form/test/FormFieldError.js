import React from 'react';
import renderer from 'react-test-renderer';
import { renderToStaticMarkup } from 'react-dom/server';
import { FormFieldError } from 'cf-component-form';

test('should render valid state', () => {
  expect(
    renderToStaticMarkup(<FormFieldError field={{}} validations={{}} />)
  ).toBe('');
});

test('should render invalid state', () => {
  const component = renderer.create(
    <FormFieldError field={{ invalid: true }} validations={{}} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('should render invalid state with validation errors', () => {
  const component = renderer.create(
    <FormFieldError
      field={{ invalid: true }}
      validations={{ required: 'This is required' }}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
