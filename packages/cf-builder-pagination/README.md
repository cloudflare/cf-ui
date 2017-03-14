# cf-builder-pagination

> Cloudflare Pagination Builder

## Installation

```sh
$ npm install cf-builder-pagination
```

## Usage

```jsx
import React from 'react';
import { PaginationBuilder } from 'cf-builder-pagination';

function getStartAndEnd(page, pageSize) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize - 1;
  return [start, end];
}

function hasAllItems(items, start, end) {
  for (let i = start; i <= end; i++) {
    if (!items[i] || items[i].isRequesting) {
      return false;
    }
  }

  return true;
}

class BuilderPagination extends React.Component {
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

  componentDidMount() {
    this.maybeRequestPage(this.state.page);
  }

  handlePageChange(page) {
    this.maybeRequestPage(page);
  }

  // This is mimicking what will happen in the API actions/reducers:
  maybeRequestPage(page) {
    const items = this.state.items.slice();
    const [start, end] = getStartAndEnd(page, this.state.perPage);
    const needsRequest = !hasAllItems(items, start, end);

    if (!needsRequest) {
      this.setState({ page });
      return;
    }

    for (let i = start; i <= end; i++) {
      if (!items[i]) {
        items[i] = {
          isRequesting: true
        };
      }
    }

    this.setState({ page, items });

    setTimeout(
      () => {
        const items = this.state.items.slice();

        for (let i = start; i <= end; i++) {
          items[i].isRequesting = false;
        }

        this.setState({ items });
      },
      500
    );
  }

  render() {
    const [start, end] = getStartAndEnd(this.state.page, this.state.perPage);
    const loading = !hasAllItems(this.state.items, start, end);

    return (
      <PaginationBuilder
        onPageChange={this.handlePageChange}
        loading={loading}
        totalCount={this.state.totalCount}
        page={this.state.page}
        perPage={this.state.perPage}
      />
    );
  }
}

export default BuilderPagination;
```
