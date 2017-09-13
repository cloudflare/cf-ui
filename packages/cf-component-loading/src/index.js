import LoadingUnstyled from './Loading';
import LoadingTheme from './LoadingTheme';

import { applyTheme } from 'cf-style-container';

const Loading = applyTheme(LoadingUnstyled, LoadingTheme);

export { Loading, LoadingUnstyled, LoadingTheme };
