import PaginationUnstyled from "./Pagination";
import PaginationRootUnstyled from "./PaginationRoot";
import PaginationItem from "./PaginationItem";
import PaginationRootTheme from "./PaginationRootTheme";
import PaginationTheme from "./PaginationTheme";

import { applyTheme } from "cf-style-container";

const Pagination = applyTheme(PaginationUnstyled, PaginationTheme);
const PaginationRoot = applyTheme(PaginationRootUnstyled, PaginationRootTheme);

export {
  Pagination,
  PaginationItem,
  PaginationRoot,
  PaginationRootTheme,
  PaginationTheme,
  PaginationUnstyled,
  PaginationRootUnstyled
};
