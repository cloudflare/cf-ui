import React from 'react';

export default class ListItem extends React.Component {
  render() {
    return (
      <li className="cf-list__item">
        {this.props.children}
      </li>
    );
  }
}
