import IconUnstyled from './Icon';
import IconTheme from './IconTheme';

import { applyTheme } from 'cf-style-container';

const Icon = applyTheme(IconUnstyled, IconTheme);

export { Icon, IconUnstyled, IconTheme };
