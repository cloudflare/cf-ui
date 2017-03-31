import FormUnstyled from './Form';
import FormTheme from './FormTheme';
import FormHeader from './FormHeader';
import FormFooterUnstyled from './FormFooter';
import FormFooterTheme from './FormFooterTheme';
import FormFieldsetUnstyled from './FormFieldset';
import FormFieldsetTheme from './FormFieldsetTheme';
import FormLabel from './FormLabel';
import FormFieldErrorUnstyled from './FormFieldError';
import FormFieldErrorTheme from './FormFieldErrorTheme';

import { applyTheme } from 'cf-style-container';

const Form = applyTheme(FormUnstyled, FormTheme);
const FormFieldError = applyTheme(FormFieldErrorUnstyled, FormFieldErrorTheme);
const FormFieldset = applyTheme(FormFieldsetUnstyled, FormFieldsetTheme);
const FormFooter = applyTheme(FormFooterUnstyled, FormFooterTheme);

export {
  Form,
  FormUnstyled,
  FormTheme,
  FormHeader,
  FormFooter,
  FormFooterUnstyled,
  FormFooterTheme,
  FormFieldset,
  FormFieldsetUnstyled,
  FormFieldsetTheme,
  FormLabel,
  FormFieldError,
  FormFieldErrorUnstyled,
  FormFieldErrorTheme
};
