import React from 'react';

export default class HeadingCaption extends React.Component {
  render() {
    return (
      <small className="cf-heading__caption">
        {this.props.children}
      </small>
    );
  }
}
