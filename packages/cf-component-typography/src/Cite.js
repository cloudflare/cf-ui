import React, { PropTypes } from 'react';

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
