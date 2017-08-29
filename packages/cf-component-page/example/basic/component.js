import React from 'react';
import { Box } from 'cf-component-box';
import {
  Page,
  PageHeader,
  PageContent,
  Header,
  Logo,
  NavList,
  NavItem
} from 'cf-component-page';

const PageComponent = () => (
  <div>
    <Header sticky>
      <a href="#"><Logo /></a>
      <NavList>
        <NavItem>One</NavItem>
        <NavItem>Two</NavItem>
        <NavItem>Three</NavItem>
      </NavList>
    </Header>
    <Page>
      <PageHeader title="Title" subtitle="Subtitle" />
      <PageContent>
        <div>Awesome page content.</div>
        <div>Please buy our things.</div>
      </PageContent>
    </Page>
  </div>
);

export default PageComponent;
