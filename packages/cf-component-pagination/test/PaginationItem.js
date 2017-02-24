const React = require('react');
const assertEqualJSX = require('assert-equal-jsx');
const PaginationItem = require('../src/PaginationItem');

describe('PaginationItem', function() {
  it('should render', function() {
    assertEqualJSX(
      <PaginationItem type="number" label="PaginationLabel" onClick={() => {}}>
        PaginationItem
      </PaginationItem>,
      // should equal
      <li className="cf-pagination__item cf-pagination__item--number">
        <a
          className="cf-pagination__link"
          href="#"
          aria-label="PaginationLabel"
        >
          PaginationItem
        </a>
      </li>
    );
  });

  it('should render active', function() {
    assertEqualJSX(
      <PaginationItem
        active
        type="number"
        label="PaginationLabel"
        onClick={() => {}}
      >
        PaginationItem
      </PaginationItem>,
      // should equal
      <li
        className="cf-pagination__item cf-pagination__item--number cf-pagination__item--active"
      >
        <span className="cf-pagination__link" aria-label="PaginationLabel">
          PaginationItem
        </span>
      </li>
    );
  });

  it('should render disabled', function() {
    assertEqualJSX(
      <PaginationItem
        disabled
        type="number"
        label="PaginationLabel"
        onClick={() => {}}
      >
        PaginationItem
      </PaginationItem>,
      // should equal
      <li
        className="cf-pagination__item cf-pagination__item--number cf-pagination__item--disabled"
      >
        <span className="cf-pagination__link" aria-label="PaginationLabel">
          PaginationItem
        </span>
      </li>
    );
  });
});
