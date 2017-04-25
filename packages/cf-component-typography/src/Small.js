import React from 'react';

import PropTypes from 'prop-types';

class Small extends React.Component {
  render() {
    return (
      <small className="cf-small">
        {this.props.children}
      </small>
    );
  }
}

Small.propTypes = {
  children: PropTypes.node
};

export default Small;
