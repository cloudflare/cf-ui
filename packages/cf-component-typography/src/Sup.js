import React from 'react';

import PropTypes from 'prop-types';

class Sup extends React.Component {
  render() {
    return (
      <sup className="cf-sup">
        {this.props.children}
      </sup>
    );
  }
}

Sup.propTypes = {
  children: PropTypes.node
};

export default Sup;
