import React from 'react';

import PropTypes from 'prop-types';

class Var extends React.Component {
  render() {
    return (
      <var className="cf-var">
        {this.props.children}
      </var>
    );
  }
}

Var.propTypes = {
  children: PropTypes.node
};

export default Var;
