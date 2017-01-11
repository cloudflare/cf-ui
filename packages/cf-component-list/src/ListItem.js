// @flow

const React = require('react');
const {PropTypes} = React;

class ListItem extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <li className="cf-list__item">
        {this.props.children}
      </li>
    );
  }
}

module.exports = ListItem;
