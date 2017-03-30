import { createComponent } from 'cf-style-container';
import PaginationRootTheme from './PaginationRootTheme';
import { applyTheme } from 'cf-style-container';

const paginationRootStyles = ({ theme }) => ({
  '&:after': {
    content: theme.content,
    display: theme.display,
    clear: theme.clear
  }
});

const PaginationRootUnstyled = createComponent(paginationRootStyles, 'div');

export { PaginationRootUnstyled };

export default applyTheme(PaginationRootUnstyled, PaginationRootTheme);
