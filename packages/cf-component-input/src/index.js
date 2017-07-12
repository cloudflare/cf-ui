import InputUnstyled from './Input';
import InputTheme from './InputTheme';
import { applyTheme } from 'cf-style-container';

const Input = applyTheme(InputUnstyled, InputTheme);

export { Input, InputUnstyled, InputTheme };
