import React, { PropTypes } from 'react';

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
