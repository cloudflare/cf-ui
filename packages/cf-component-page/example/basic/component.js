import React from 'react';
import { render } from 'react-dom';
import { Page, PageHeader } from '../../src/index';

class Component extends React.Component {
  render() {
    return (
      <Page>
        <PageHeader title="Title" subtitle="Subtitle" />
      </Page>
    );
  }
}

render(<Component />, document.getElementById('cf-component-page--basic'));
