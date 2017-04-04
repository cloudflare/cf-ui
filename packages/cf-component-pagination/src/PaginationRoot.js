import { createComponent } from 'cf-style-container';
import PaginationRootTheme from './PaginationRootTheme';

const paginationRootStyles = ({ theme }) => ({
  '&:after': {
    content: theme.content,
    display: theme.display,
    clear: theme.clear
  }
});

export default createComponent(paginationRootStyles, 'div');
