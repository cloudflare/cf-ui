import React from 'react';

import PropTypes from 'prop-types';

class DynamicContent extends React.Component {
  render() {
    return (
      <div
        className="cf-dynamic-content"
        dangerouslySetInnerHTML={this.props.dangerouslySetInnerHTML}
      />
    );
  }
}

DynamicContent.propTypes = {
  dangerouslySetInnerHTML: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }).isRequired
};

export default DynamicContent;
