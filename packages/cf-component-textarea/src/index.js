import { applyTheme } from 'cf-style-container';

import TextareaUnstyled from './Textarea';
import TextareaTheme from './TextareaTheme';

const Textarea = applyTheme(TextareaUnstyled, TextareaTheme);

export { Textarea, TextareaUnstyled, TextareaTheme };
