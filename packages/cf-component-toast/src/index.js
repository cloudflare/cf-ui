import { applyTheme } from 'cf-style-container';

import ToastUnstyled from './Toast';
import ToastTheme from './ToastTheme';

const Toast = applyTheme(ToastUnstyled, ToastTheme);

export { Toast, ToastUnstyled, ToastTheme };
