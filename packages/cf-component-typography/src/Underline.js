import React from 'react';

import PropTypes from 'prop-types';

class Underline extends React.Component {
  render() {
    return (
      <u className="cf-underline">
        {this.props.children}
      </u>
    );
  }
}

Underline.propTypes = {
  children: PropTypes.node
};

export default Underline;
