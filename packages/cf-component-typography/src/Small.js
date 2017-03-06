import React, { PropTypes } from 'react';

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
