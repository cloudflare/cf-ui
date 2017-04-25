import React from 'react';

import PropTypes from 'prop-types';

class Ins extends React.Component {
  render() {
    return (
      <ins className="cf-ins">
        {this.props.children}
      </ins>
    );
  }
}

Ins.propTypes = {
  children: PropTypes.node
};

export default Ins;
