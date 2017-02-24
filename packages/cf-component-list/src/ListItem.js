const React = require('react');
const { PropTypes } = React;

class ListItem extends React.Component {
  render() {
    return (
      <li className="cf-list__item">
        {this.props.children}
      </li>
    );
  }
}

ListItem.propTypes = {
  children: PropTypes.node
};

module.exports = ListItem;
