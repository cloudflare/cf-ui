const React = require('react');
const assertEqualJSX = require('../../../utils/assertEqualJSX');
const Pagination = require('../src/Pagination');

function sanitizeId(str) {
  return str.replace(/"cf-pagination-([0-9]+)"/ig, '"%id%"');
}

describe('Pagination', function() {
  it('should render', function() {
    assertEqualJSX(
      <Pagination>Pagination</Pagination>,
      // should equal
      <div className="cf-pagination">
        <ul className="cf-pagination__list" role="navigation">
          Pagination
        </ul>
      </div>
    );
  });

  it('should render with info', function() {
    assertEqualJSX(
      <Pagination info="Pagination Info">Pagination</Pagination>,
      // should equal
      <div className="cf-pagination">
        <ul className="cf-pagination__list" role="navigation" aria-describedby="%id%">
          Pagination
        </ul>
        <span id="%id%">
          Pagination Info
        </span>
      </div>,
      { sanitize: sanitizeId }
    );
  });
});
