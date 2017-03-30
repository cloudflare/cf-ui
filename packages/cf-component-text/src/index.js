import TextUnstyled from './Text';
import TextTheme from './TextTheme';

import { applyTheme } from 'cf-style-container';

const Text = applyTheme(TextUnstyled, TextTheme);

export { Text, TextUnstyled, TextTheme };
