import React from 'react';

import PropTypes from 'prop-types';

class Del extends React.Component {
  render() {
    return (
      <del className="cf-del">
        {this.props.children}
      </del>
    );
  }
}

Del.propTypes = {
  children: PropTypes.node
};

export default Del;
