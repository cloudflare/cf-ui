import React from 'react';

export default class Strike extends React.Component {
  render() {
    return (
      <s className="cf-strike">
        {this.props.children}
      </s>
    );
  }
}
