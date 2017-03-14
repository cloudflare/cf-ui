# cf-component-pagination

> Cloudflare Pagination Component

## Installation

```sh
$ npm install cf-component-pagination
```

## Usage

```jsx
import React from 'react';
import { Pagination, PaginationItem } from 'cf-component-pagination';
import Icon from 'cf-component-icon';

class PaginationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: 4,
      active: 1
    };
  }

  handleClickItem(page) {
    if (page >= 1 && page <= this.state.pages) {
      this.setState({ active: page });
    }
  }

  handleClickPrev() {
    if (this.state.active > 1) {
      this.handleClickItem(this.state.active - 1);
    }
  }

  handleClickNext() {
    if (this.state.active < this.state.pages) {
      this.handleClickItem(this.state.active + 1);
    }
  }

  render() {
    const items = [];

    for (let i = 1; i <= this.state.pages; i++) {
      items.push(
        <PaginationItem
          key={i}
          type="number"
          label={'Page ' + i}
          active={this.state.active === i}
          onClick={this.handleClickItem.bind(this, i)}
        >
          {i}
        </PaginationItem>
      );
    }

    return (
      <Pagination>
        <PaginationItem
          type="prev"
          label="Previous Page"
          disabled={this.state.active === 1}
          onClick={this.handleClickPrev.bind(this)}
        >
          <Icon type="caret-left" label={false} />
        </PaginationItem>
        {items}
        <PaginationItem
          type="next"
          label="Next Page"
          disabled={this.state.active === this.state.pages}
          onClick={this.handleClickNext}
        >
          <Icon type="caret-right" label={false} />
        </PaginationItem>
      </Pagination>
    );
  }
}

export default PaginationComponent;
```
