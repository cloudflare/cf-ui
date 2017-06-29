import ProgressUnstyled from './Progress';
import ProgressTheme from './ProgressTheme';

import { applyTheme } from 'cf-style-container';

const Progress = applyTheme(ProgressUnstyled, ProgressTheme);

export { Progress, ProgressUnstyled, ProgressTheme };
