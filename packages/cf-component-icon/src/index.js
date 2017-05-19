import { applyTheme } from '../../cf-style-container';

import IconUnstyled from './Icon';
import IconTheme from './IconTheme';

const Icon = applyTheme(IconUnstyled, IconTheme);

export { Icon as default, IconUnstyled, IconTheme };
