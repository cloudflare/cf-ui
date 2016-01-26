import React from 'react';

export default class Small extends React.Component {
  render() {
    return (
      <small className="cf-small">
        {this.props.children}
      </small>
    );
  }
}
