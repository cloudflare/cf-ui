import { createComponent } from 'cf-style-container';

const paginationRootStyles = ({ theme }) => ({
  '&:after': {
    content: theme.content,
    display: theme.display,
    clear: theme.clear
  }
});

export default createComponent(paginationRootStyles, 'div');
