// @flow

const React = require('react');
const {PropTypes} = React;

class TableBody extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    className: ''
  };

  render() {
    let className = 'cf-table__body';
    if (this.props.className.trim()) className += ' ' + this.props.className.trim();

    return (
      <tbody className={className}>
        {this.props.children}
      </tbody>
    );
  }
}

module.exports = TableBody;
