import React from "react";
import { applyTheme } from "cf-style-container";
import {
  Page as PageUnstyled,
  PageTheme,
  PageHeader as PageHeaderUnstyled,
  PageHeaderTheme
} from "cf-component-page";

const Page = applyTheme(PageUnstyled, PageTheme);
const PageHeader = applyTheme(PageHeaderUnstyled, PageHeaderTheme);

const PageComponent = () => (
  <Page>
    <PageHeader title="Title" subtitle="Subtitle" />
  </Page>
);

export default PageComponent;
