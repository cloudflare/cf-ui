// this is a wrapper for testing, it passes fela based
// components fela's renderer and global theme

import React from 'react';
import { StyleProvider } from './packages/cf-style-provider/src/';

export default component => <StyleProvider dev>{component}</StyleProvider>;
