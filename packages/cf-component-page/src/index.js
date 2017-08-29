import PageUnstyled from './Page';
import PageHeaderUnstyled from './PageHeader';
import PageContentUnstyled from './PageContent';
import PageTheme from './PageTheme';
import Header from './Header';
import Logo from './Logo';
import NavList from './NavList';
import NavItem from './NavItem';
import logoSvg from './logo.svg';
import logoSvgMobile from './logo_mobile.svg';

import { applyTheme } from 'cf-style-container';

const Page = applyTheme(PageUnstyled, PageTheme);
const PageHeader = applyTheme(PageHeaderUnstyled, {});
const PageContent = applyTheme(PageContentUnstyled, {});

export {
  Header,
  Logo,
  logoSvg,
  logoSvgMobile,
  NavItem,
  NavList,
  Page,
  PageTheme,
  PageUnstyled,
  PageHeader,
  PageHeaderUnstyled,
  PageContent,
  PageContentUnstyled
};
