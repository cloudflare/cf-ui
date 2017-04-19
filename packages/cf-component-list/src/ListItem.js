import React from 'react';

import PropTypes from 'prop-types';

class ListItem extends React.Component {
  render() {
    return (
      <li className="cf-list__item">
        {this.props.children}
      </li>
    );
  }
}

ListItem.propTypes = {
  children: PropTypes.node
};

export default ListItem;
