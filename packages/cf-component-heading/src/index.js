import HeadingUnstyled from './Heading';
import HeadingCaptionUnstyled from './HeadingCaption';
import HeadingTheme from './HeadingTheme';
import HeadingCaptionTheme from './HeadingCaptionTheme';

import { applyTheme } from 'cf-style-container';

const Heading = applyTheme(HeadingUnstyled, HeadingTheme);
const HeadingCaption = applyTheme(HeadingCaptionUnstyled, HeadingCaptionTheme);

export {
  Heading,
  HeadingUnstyled,
  HeadingCaption,
  HeadingCaptionUnstyled,
  HeadingTheme,
  HeadingCaptionTheme
};
