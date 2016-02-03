const React = require('react');
const {render} = require('react-dom');

const {
  Pagination,
  PaginationItem
} = require('../../src/index');

class Component extends React.Component {
  state = {
    pages: 4,
    active: 1
  };

  handleClickItem = page => {
    if (page >= 1 && page <= this.state.pages) {
      this.setState({ active: page });
    }
  };

  handleClickPrev = () => {
    if (this.state.active > 1) {
      this.handleClickItem(this.state.active - 1);
    }
  };

  handleClickNext = () => {
    if (this.state.active < this.state.pages) {
      this.handleClickItem(this.state.active + 1);
    }
  };

  render() {
    const items = [];

    for (let i = 1; i <= this.state.pages; i++) {
      items.push(
        <PaginationItem
          key={i}
          type="number"
          label={'Page ' + i}
          active={this.state.active === i}
          onClick={this.handleClickItem.bind(null, i)}>
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
          onClick={this.handleClickPrev}>
          &larr;
        </PaginationItem>
        {items}
        <PaginationItem
          type="next"
          label="Next Page"
          disabled={this.state.active === this.state.pages}
          onClick={this.handleClickNext}>
          &rarr;
        </PaginationItem>
      </Pagination>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-pagination--basic')
);
