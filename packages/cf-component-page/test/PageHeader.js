const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const PageHeader = require('../src/PageHeader');

describe('PageHeader', function() {
  it('should render title', function() {
    assertEqualJSX(
      <PageHeader title="Title"/>,
      // should equal
      <header className="cf-page__header">
        <h1 className="cf-page__title">Title</h1>
      </header>
    );
  });

  it('should render title/subtitle', function() {
    assertEqualJSX(
      <PageHeader title="Title" subtitle="Subtitle"/>,
      // should equal
      <header className="cf-page__header">
        <h1 className="cf-page__title">Title</h1>
        <p className="cf-page__subtitle">Subtitle</p>
      </header>
    );
  });
});
