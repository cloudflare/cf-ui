import { applyTheme } from 'cf-style-container';

import ToggleUnstyled from './Toggle';
import ToggleTheme from './ToggleTheme';

const Toggle = applyTheme(ToggleUnstyled, ToggleTheme);

export { Toggle as default, ToggleUnstyled, ToggleTheme };
