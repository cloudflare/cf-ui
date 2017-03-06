import React, { PropTypes } from 'react';

class Sub extends React.Component {
  render() {
    return (
      <sub className="cf-sub">
        {this.props.children}
      </sub>
    );
  }
}

Sub.propTypes = {
  children: PropTypes.node
};

export default Sub;
