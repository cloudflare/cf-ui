import React, { PropTypes } from 'react';

class Mark extends React.Component {
  render() {
    return (
      <mark className="cf-mark">
        {this.props.children}
      </mark>
    );
  }
}

Mark.propTypes = {
  children: PropTypes.node
};

export default Mark;
