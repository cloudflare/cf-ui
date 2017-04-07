import { applyTheme } from 'cf-style-container';
import BoxUnstyled from './Box';
import BoxTheme from './BoxTheme';

const Box = applyTheme(BoxUnstyled, BoxTheme);

export { BoxUnstyled, Box, BoxTheme };
