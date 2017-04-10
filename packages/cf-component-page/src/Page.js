import React from 'react';

import PropTypes from 'prop-types';

class Page extends React.Component {
  render() {
    return (
      <article className="cf-page">
        {this.props.children}
      </article>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node
};

export default Page;
