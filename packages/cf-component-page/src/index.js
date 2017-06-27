import PageUnstyled from './Page';
import PageHeaderUnstyled from './PageHeader';
import PageContentUnstyled from './PageContent';
import PageTheme from './PageTheme';

import { applyTheme } from 'cf-style-container';

const Page = applyTheme(PageUnstyled, PageTheme);
const PageHeader = applyTheme(PageHeaderUnstyled, {});
const PageContent = applyTheme(PageContentUnstyled, {});

export {
  Page,
  PageTheme,
  PageUnstyled,
  PageHeader,
  PageHeaderUnstyled,
  PageContent,
  PageContentUnstyled
};
