import React from 'react';

import PropTypes from 'prop-types';

class Strike extends React.Component {
  render() {
    return (
      <s className="cf-strike">
        {this.props.children}
      </s>
    );
  }
}

Strike.propTypes = {
  children: PropTypes.node
};

export default Strike;
