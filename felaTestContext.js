// this is a wrapper for testing, it passes fela based
// components fela's renderer and global theme

import React from 'react';
import { createProvider } from './packages/cf-style-provider/src/';

const StyleProvider = createProvider({ dev: true });
export default component => <StyleProvider>{component}</StyleProvider>;
