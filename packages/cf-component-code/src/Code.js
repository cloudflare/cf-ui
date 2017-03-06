import React, { PropTypes } from 'react';

class Code extends React.Component {
  render() {
    return (
      <code className="cf-code">
        {this.props.children}
      </code>
    );
  }
}

Code.propTypes = {
  children: PropTypes.node
};

export default Code;
