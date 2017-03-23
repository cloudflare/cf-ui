import React, { PropTypes } from 'react';
import uniqueId from 'lodash/uniqueId';
import { createComponent } from 'cf-style-container';

const paginationRootStyles = ({ theme }) => ({
  '&:after': {
    content: theme['content:after'],
    display: theme['display:after'],
    clear: theme['clear:after']
  }
});

const PaginationRoot = createComponent(paginationRootStyles, 'div');

const Pagination = ({ info, children }) => {
  const id = info ? uniqueId('cf-pagination-') : null;

  return (
    <PaginationRoot>
      <ul
        className="cf-pagination__list"
        role="navigation"
        aria-describedby={id}
      >
        {children}
      </ul>
      {info &&
        <span id={id}>
          {info}
        </span>}
    </PaginationRoot>
  );
};

Pagination.propTypes = {
  info: PropTypes.string,
  children: PropTypes.node
};

export default Pagination;
