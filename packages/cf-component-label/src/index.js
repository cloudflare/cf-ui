import LabelUnstyled from './Label';
import LabelTheme from './LabelTheme';

import { applyTheme } from 'cf-style-container';

const Label = applyTheme(LabelUnstyled, LabelTheme);

export { Label, LabelTheme, LabelUnstyled };
