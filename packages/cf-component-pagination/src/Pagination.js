import React, { PropTypes } from 'react';
import uniqueId from 'lodash/uniqueId';
import { createComponent } from 'cf-style-container';
import PaginationRoot from './PaginationRoot';
import PaginationTheme from './PaginationTheme';
import { applyTheme } from 'cf-style-container';

const styles = ({ theme }) => ({
  '&:after': {
    content: theme.content,
    display: theme.display,
    clear: theme.clear
  },
  listStyle: theme.listStyle,
  marginTop: theme.marginTop,
  marginLeft: theme.marginLeft,
  marginRight: theme.marginRight,
  marginBottom: theme.marginBottom,
  paddingTop: theme.paddingTop,
  paddingLeft: theme.paddingLeft,
  paddingRight: theme.paddingRight,
  paddingBottom: theme.paddingBottom,
  float: theme.float,
  borderRadius: theme.borderRadius,
  boxShadow: theme.boxShadow
});

const Pagination = ({ info, children, className }) => {
  const id = info ? uniqueId('cf-pagination-') : null;
  return (
    <PaginationRoot>
      <ul className={className} role="navigation" aria-describedby={id}>
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
  className: PropTypes.string.isRequired,
  info: PropTypes.string,
  children: PropTypes.node
};

const PaginationUnstyled = createComponent(styles, Pagination);

export { PaginationUnstyled };

export default applyTheme(PaginationUnstyled, PaginationTheme);
