import React from 'react';
import { Provider } from 'react-fela';
import { createRenderer } from './felaRenderer';

const renderer = createRenderer({ useMonolithic: true });

export default component => (
  <Provider renderer={renderer}>{component}</Provider>
);
