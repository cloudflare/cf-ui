import React from 'react';

export default class Abbr extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <abbr className="cf-abbr" title={this.props.title}>
        {this.props.children}
      </abbr>
    );
  }
}
