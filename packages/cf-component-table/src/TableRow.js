const React = require('react');
const {PropTypes} = React;

class TableRow extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'default',
      'info',
      'success',
      'warning',
      'error'
    ]),
    accent: PropTypes.oneOf([
      false,
      'gray',
      'orange',
      'pink',
      'red',
      'green',
      'purple'
    ])
  };

  static defaultProps = {
    type: 'default',
    accent: false
  };

  render() {
    let className = `cf-table__row cf-table__row--${this.props.type}`;

    if (this.props.accent) {
      className += ` cf-table__row--accent-${this.props.accent}`;
    }

    return (
      <tr className={className}>
        {this.props.children}
      </tr>
    );
  }
}

module.exports = TableRow;
