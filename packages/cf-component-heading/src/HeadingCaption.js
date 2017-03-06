import React, { PropTypes } from 'react';

class HeadingCaption extends React.Component {
  render() {
    return (
      <small className="cf-heading__caption">
        {this.props.children}
      </small>
    );
  }
}

HeadingCaption.propTypes = {
  children: PropTypes.node
};

export default HeadingCaption;
