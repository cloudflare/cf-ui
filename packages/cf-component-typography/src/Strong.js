import React, { PropTypes } from 'react';

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
