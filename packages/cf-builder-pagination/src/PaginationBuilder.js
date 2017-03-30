import React, { PropTypes } from 'react';
import { Pagination, PaginationItem } from 'cf-component-pagination';
import Icon from 'cf-component-icon';

class PaginationBuilder extends React.Component {
  render() {
    const {
      totalCount: totalItems,
      page,
      perPage,
      infoFormatter,
      loading,
      onPageChange
    } = this.props;

    const totalPages = Math.ceil(totalItems / perPage);
    const pageIndex = this.props.page - 1;
    const start = Math.max(pageIndex * perPage + 1, 1);
    const end = Math.min(start + perPage - 1, totalItems);

    const handleClickItem = page => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    };

    const items = [];

    let prevWasEllipsis = false;

    for (let i = 1; i <= totalPages; i++) {
      if (
        // First Page:
        i === 1 ||
        // Last Page:
        i === totalPages ||
        // Current Page:
        i === page ||
        // Within 2 of page:
        Math.abs(page - i) <= 2 ||
        // Within 3 of page and next to start or end: (Why? Because if we show an ellipsis instead of just a single number then wtf was the point)
        (Math.abs(page - i) <= 3 && (i === 2 || i === totalPages - 1))
      ) {
        prevWasEllipsis = false;
        items.push(
          <PaginationItem
            key={i}
            type={loading && page === i ? 'loading' : 'number'}
            label={'Page ' + i}
            active={page === i}
            onClick={() => handleClickItem(i)}
          >
            {i}
          </PaginationItem>
        );
      } else if (!prevWasEllipsis) {
        prevWasEllipsis = true;
        items.push(
          <PaginationItem
            key={i}
            type="ellipsis"
            label={'Page ' + i}
            onClick={() => null}
          />
        );
      }
    }

    const info = infoFormatter && infoFormatter(start, end, totalItems);

    return (
      <Pagination info={info}>
        <PaginationItem
          type="prev"
          label="Previous Page"
          disabled={page === 1}
          onClick={() => handleClickItem(page - 1)}
        >
          <Icon type="caret-left" label={false} />
        </PaginationItem>
        {items}
        <PaginationItem
          type="next"
          label="Next Page"
          disabled={page === totalPages}
          onClick={() => handleClickItem(page + 1)}
        >
          <Icon type="caret-right" label={false} />
        </PaginationItem>
      </Pagination>
    );
  }
}

PaginationBuilder.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,

  totalCount: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,

  infoFormatter: PropTypes.func
};

export default PaginationBuilder;
