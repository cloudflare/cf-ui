import PaginationUnstyled from './Pagination';
import PaginationRootUnstyled from './PaginationRoot';
import PaginationItemUnstyled from './PaginationItem';
import PaginationLinkUnstyled from './PaginationLink';
import PaginationRootTheme from './PaginationRootTheme';
import PaginationTheme from './PaginationTheme';
import PaginationItemTheme from './PaginationItemTheme';
import PaginationLinkTheme from './PaginationLinkTheme';
import { applyTheme } from 'cf-style-container';

const Pagination = applyTheme(PaginationUnstyled, PaginationTheme);
const PaginationRoot = applyTheme(PaginationRootUnstyled, PaginationRootTheme);
const PaginationItem = applyTheme(PaginationItemUnstyled, PaginationItemTheme);
const PaginationLink = applyTheme(PaginationLinkUnstyled, PaginationLinkTheme);

export {
  Pagination,
  PaginationItem,
  PaginationRoot,
  PaginationLink,
  PaginationRootTheme,
  PaginationTheme,
  PaginationItemTheme,
  PaginationLinkTheme,
  PaginationUnstyled,
  PaginationRootUnstyled,
  PaginationItemUnstyled,
  PaginationLinkUnstyled
};
