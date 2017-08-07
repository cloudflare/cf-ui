import { applyTheme } from 'cf-style-container';

import SelectUnstyled from './Select';
import SelectTheme from './SelectTheme';

const Select = applyTheme(SelectUnstyled, SelectTheme);

export { Select, SelectUnstyled, SelectTheme };
