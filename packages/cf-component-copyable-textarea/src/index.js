import { applyTheme } from 'cf-style-container';

import CopyableTextareaUnstyled from './CopyableTextarea';
import CopyableTextareaTheme from './CopyableTextareaTheme';

const CopyableTextarea = applyTheme(
  CopyableTextareaUnstyled,
  CopyableTextareaTheme
);

export { CopyableTextarea, CopyableTextareaUnstyled, CopyableTextareaTheme };
