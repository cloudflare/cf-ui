import React from 'react';

import PropTypes from 'prop-types';

class Kbd extends React.Component {
  render() {
    return (
      <kbd className="cf-kbd">
        {this.props.children}
      </kbd>
    );
  }
}

Kbd.propTypes = {
  children: PropTypes.node
};

export default Kbd;
