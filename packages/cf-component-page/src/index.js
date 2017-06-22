import PageUnstyled from './Page';
import PageHeaderUnstyled from './PageHeader';
import PageContentUnstyled from './PageContent';

import { applyTheme } from 'cf-style-container';

const Page = applyTheme(PageUnstyled, {});
const PageHeader = applyTheme(PageHeaderUnstyled, {});
const PageContent = applyTheme(PageContentUnstyled, {});

export {
  Page,
  PageUnstyled,
  PageHeader,
  PageHeaderUnstyled,
  PageContent,
  PageContentUnstyled
};
