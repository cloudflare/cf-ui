import { applyTheme } from 'cf-style-container';

import CalloutUnstyled from './Callout';
import CalloutTheme from './CalloutTheme';

const Callout = applyTheme(CalloutUnstyled, CalloutTheme);

export { Callout, CalloutUnstyled, CalloutTheme };
