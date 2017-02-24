const React = require('react');
const { render } = require('react-dom');

const {
  Page,
  PageHeader
} = require('../../src/index');

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
