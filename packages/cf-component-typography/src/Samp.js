import React, { PropTypes } from 'react';

class Samp extends React.Component {
  render() {
    return (
      <samp className="cf-samp">
        {this.props.children}
      </samp>
    );
  }
}

Samp.propTypes = {
  children: PropTypes.node
};

export default Samp;
