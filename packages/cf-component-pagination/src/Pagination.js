import React, { PropTypes } from 'react';
import uniqueId from 'lodash/uniqueId';

class Pagination extends React.Component {
  render() {
    const id = this.props.info ? uniqueId('cf-pagination-') : null;

    return (
      <div className="cf-pagination">
        <ul
          className="cf-pagination__list"
          role="navigation"
          aria-describedby={id}
        >
          {this.props.children}
        </ul>
        {this.props.info &&
          <span id={id}>
            {this.props.info}
          </span>}
      </div>
    );
  }
}

Pagination.propTypes = {
  info: PropTypes.string,
  children: PropTypes.node
};

export default Pagination;
