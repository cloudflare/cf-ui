import PaginationUnstyled from './Pagination';
import PaginationRootUnstyled from './PaginationRoot';
import PaginationItemUnstyled from './PaginationItem';
import PaginationRootTheme from './PaginationRootTheme';
import PaginationTheme from './PaginationTheme';
import PaginationItemTheme from './PaginationItemTheme';

import { applyTheme } from 'cf-style-container';

const Pagination = applyTheme(PaginationUnstyled, PaginationTheme);
const PaginationRoot = applyTheme(PaginationRootUnstyled, PaginationRootTheme);
const PaginationItem = applyTheme(PaginationItemUnstyled, PaginationItemTheme);

export {
  Pagination,
  PaginationItem,
  PaginationRoot,
  PaginationRootTheme,
  PaginationTheme,
  PaginationItemTheme,
  PaginationUnstyled,
  PaginationRootUnstyled,
  PaginationItemUnstyled
};
