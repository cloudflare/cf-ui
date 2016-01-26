import React from 'react';

export default class CardControl extends React.Component {
  render() {
    return (
      <div className="cf-card__control">
        {this.props.children}
      </div>
    );
  }
}
