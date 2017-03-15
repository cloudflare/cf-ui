// this is a wrapper for testing, it passes fela based
// components fela's renderer and global theme

import React from 'react';
import { Provider, ThemeProvider } from 'react-fela';
import { createRenderer } from './felaRenderer';
import { variables } from 'cf-style-const';

const renderer = createRenderer({ useMonolithic: true });

export default component => (
  <Provider renderer={renderer}>
    <ThemeProvider theme={variables}>{component}</ThemeProvider>
  </Provider>
);
