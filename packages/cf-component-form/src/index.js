import FormUnstyled from './Form';
import FormTheme from './FormTheme';
import FormHeaderUnstyled from './FormHeader';
import FormHeaderTheme from './FormHeaderTheme';
import FormFooterUnstyled from './FormFooter';
import FormFooterTheme from './FormFooterTheme';
import FormFieldsetUnstyled from './FormFieldset';
import FormFieldsetTheme from './FormFieldsetTheme';
import FormLabelUnstyled from './FormLabel';
import FormLabelTheme from './FormLabelTheme';
import FormFieldErrorUnstyled from './FormFieldError';
import FormFieldErrorTheme from './FormFieldErrorTheme';

import { applyTheme } from 'cf-style-container';

const Form = applyTheme(FormUnstyled, FormTheme);
const FormFieldError = applyTheme(FormFieldErrorUnstyled, FormFieldErrorTheme);
const FormFieldset = applyTheme(FormFieldsetUnstyled, FormFieldsetTheme);
const FormFooter = applyTheme(FormFooterUnstyled, FormFooterTheme);
const FormHeader = applyTheme(FormHeaderUnstyled, FormHeaderTheme);
const FormLabel = applyTheme(FormLabelUnstyled, FormLabelTheme);

export {
  Form,
  FormUnstyled,
  FormTheme,
  FormHeader,
  FormHeaderUnstyled,
  FormHeaderTheme,
  FormFooter,
  FormFooterUnstyled,
  FormFooterTheme,
  FormFieldset,
  FormFieldsetUnstyled,
  FormFieldsetTheme,
  FormLabel,
  FormLabelUnstyled,
  FormLabelTheme,
  FormFieldError,
  FormFieldErrorUnstyled,
  FormFieldErrorTheme
};
