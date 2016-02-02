const React = require('react');

class ListItem extends React.Component {
  render() {
    return (
      <li className="cf-list__item">
        {this.props.children}
      </li>
    );
  }
}

module.exports = ListItem;
