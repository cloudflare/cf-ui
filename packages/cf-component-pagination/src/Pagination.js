import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import { createComponent } from 'cf-style-container';
import { PaginationRoot } from './index';

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

class Pagination extends React.Component {
  render() {
    const { info, children, className } = this.props;
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
  }
}

Pagination.propTypes = {
  className: PropTypes.string.isRequired,
  info: PropTypes.string,
  children: PropTypes.node
};

export default createComponent(styles, Pagination);
