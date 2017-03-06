import React, { PropTypes } from 'react';

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
