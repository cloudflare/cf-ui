import React from 'react';

import PropTypes from 'prop-types';

class Em extends React.Component {
  render() {
    return (
      <em className="cf-em">
        {this.props.children}
      </em>
    );
  }
}

Em.propTypes = {
  children: PropTypes.node
};

export default Em;
