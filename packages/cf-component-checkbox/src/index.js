import { applyTheme } from 'cf-style-container';
import CheckboxUnstyled from './Checkbox';
import CheckboxTheme from './CheckboxTheme';
import CheckboxGroup from './CheckboxGroup';

const Checkbox = applyTheme(CheckboxUnstyled, CheckboxTheme);

export { Checkbox, CheckboxUnstyled, CheckboxTheme, CheckboxGroup };
