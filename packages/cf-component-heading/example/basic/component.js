import React from 'react';
import {
  Heading,
  HeadingCaption,
  HeadingTheme,
  HeadingCaptionTheme
} from 'cf-component-heading';
import { applyTheme } from 'cf-style-container';

const StyledHeading = applyTheme(Heading, HeadingTheme);
const StyledHeadingCaption = applyTheme(HeadingCaption, HeadingCaptionTheme);

const HeadingComponent = () => (
  <StyledHeading size={2}>
    Look at this nice heading!
    <StyledHeadingCaption>
      It even has a nice HeadingCaption
    </StyledHeadingCaption>
  </StyledHeading>
);

export default HeadingComponent;
