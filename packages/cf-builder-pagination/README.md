# cf-builder-pagination

> CloudFlare Pagination Builder

## Installation

```sh
$ npm install cf-builder-pagination
```

## Usage

```js
const React = require('react');
const {render} = require('react-dom');
const {PaginationBuilder} = require('../../src/index');

function isRequestingItemsFromCurrentPage() {
  // check if any items from start-end of page are currently requesting...
}

class Component extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      totalCount: 143,
      page: 1,
      perPage: 20
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page) {
    // Send off a paginated request...
  };

  render() {
    const {items, totalCount, page, perPage} = this.state;

    return (
      <PaginationBuilder
        onPageChange={this.handlePageChange}
        loading={isRequestingItemsFromCurrentPage(items, page, perPage)}
        totalCount={totalCount}
        page={page}
        perPage={perPage}/>
    );
  }
}
```
