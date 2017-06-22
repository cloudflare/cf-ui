import React from 'react';
import { Page, PageHeader, PageContent } from 'cf-component-page';

const PageComponent = () => (
  <Page>
    <PageHeader title="Title" subtitle="Subtitle" />
    <PageContent>
      <div>Awesome page content.</div>
      <div>Please buy our things.</div>
    </PageContent>
  </Page>
);

export default PageComponent;
