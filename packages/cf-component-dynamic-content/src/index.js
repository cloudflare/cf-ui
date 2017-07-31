import { applyTheme } from 'cf-style-container';

import DynamicContentUnstyled from './DynamicContent';
import DynamicContentTheme from './DynamicContentTheme';

const DynamicContent = applyTheme(DynamicContentUnstyled, DynamicContentTheme);

export { DynamicContent, DynamicContentUnstyled, DynamicContentTheme };
