import React from 'react';

export default class Card extends React.Component {
  render() {
    return (
      <section className="cf-card">
        {this.props.children}
      </section>
    );
  }
}
