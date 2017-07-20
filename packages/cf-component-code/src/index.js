import { applyTheme } from 'cf-style-container';

import CodeUnstyled from './Code';
import CodeTheme from './CodeTheme';
import CodeBlockUnstyled from './CodeBlock';
import CodeBlockTheme from './CodeBlockTheme';

const Code = applyTheme(CodeUnstyled, CodeTheme);
const CodeBlock = applyTheme(CodeBlockUnstyled, CodeBlockTheme);

export {
  Code,
  CodeUnstyled,
  CodeTheme,
  CodeBlock,
  CodeBlockUnstyled,
  CodeBlockTheme
};
