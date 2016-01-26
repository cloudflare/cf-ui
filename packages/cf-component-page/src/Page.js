import React from 'react';

export default class Page extends React.Component {
  render() {
    return (
      <article className="cf-page">
        {this.props.children}
      </article>
    );
  }
}
