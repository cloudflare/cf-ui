import React from 'react';

import PropTypes from 'prop-types';

class Cite extends React.Component {
  render() {
    return (
      <cite className="cf-cite">
        {this.props.children}
      </cite>
    );
  }
}

Cite.propTypes = {
  children: PropTypes.node
};

export default Cite;
