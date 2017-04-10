import React from 'react';

import PropTypes from 'prop-types';

class Strong extends React.Component {
  render() {
    return (
      <strong className="cf-strong">
        {this.props.children}
      </strong>
    );
  }
}

Strong.propTypes = {
  children: PropTypes.node
};

export default Strong;
