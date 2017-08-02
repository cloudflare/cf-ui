import { applyTheme } from 'cf-style-container';

import RadioUnstyled from './Radio';
import RadioTheme from './RadioTheme';
import RadioGroupUnstyled from './RadioGroup';
import RadioGroupTheme from './RadioGroupTheme';

const Radio = applyTheme(RadioUnstyled, RadioTheme);
const RadioGroup = applyTheme(RadioGroupUnstyled, RadioGroupTheme);

export {
  Radio,
  RadioUnstyled,
  RadioTheme,
  RadioGroup,
  RadioGroupUnstyled,
  RadioGroupTheme
};
