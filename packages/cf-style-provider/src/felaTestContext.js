// this is a wrapper for testing, it passes fela based
// components fela's renderer and global theme

import React from 'react';
import StyleProvider from './StyleProvider';

export default (component, renderer) => (
  <StyleProvider renderer={renderer} dev selectorPrefix="cf-">
    {component}
  </StyleProvider>
);
