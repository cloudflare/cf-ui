import PaginationUnstyled from './Pagination';
import PaginationTheme from './PaginationTheme';
import PaginationMinimalTheme from './PaginationMinimalTheme';

import PaginationRootUnstyled from './PaginationRoot';
import PaginationRootTheme from './PaginationRootTheme';

import PaginationItemUnstyled from './PaginationItem';
import PaginationItemTheme from './PaginationItemTheme';
import PaginationItemMinimalTheme from './PaginationItemMinimalTheme';

import { applyTheme } from 'cf-style-container';

const Pagination = applyTheme(PaginationUnstyled, PaginationTheme);
const PaginationMinimal = applyTheme(
  PaginationUnstyled,
  PaginationMinimalTheme
);

const PaginationRoot = applyTheme(PaginationRootUnstyled, PaginationRootTheme);

const PaginationItem = applyTheme(PaginationItemUnstyled, PaginationItemTheme);
const PaginationItemMinimal = applyTheme(
  PaginationItemUnstyled,
  PaginationItemMinimalTheme
);

export {
  Pagination,
  PaginationUnstyled,
  PaginationTheme,
  PaginationMinimal,
  PaginationItem,
  PaginationItemUnstyled,
  PaginationItemTheme,
  PaginationItemMinimal,
  PaginationRoot,
  PaginationRootUnstyled,
  PaginationRootTheme
};
